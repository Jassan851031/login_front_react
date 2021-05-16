const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            path: 'http://localhost:5000',
            name: '',
            last_name: '',
            email: '',
            password: '',
            currentUser: '',
            all_users: [],
            isAuthenticated: false,
            getLogin_Error: null,
            createUser_Error: null,
            isAdmin: '',
            isActive: '',
        },

        actions: {
            getLogin: (e, url, history) => {
                e.preventDefault();
                const store = getStore();
                const data = {
                    email: store.email,
                    password: store.password,
                }
                fetch(store.path + '/login', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        if (data.msg) {
                            setStore({
                                getLogin_Error: data
                            })
                        }
                        else {
                            setStore({
                                email: '',
                                password: '',
                                currentUser: data,
                                getLogin_Error: null,
                                isAuthenticated: true
                            });

                            sessionStorage.setItem('currentUser', JSON.stringify(data))
                            sessionStorage.setItem('isAuthenticated', true)
                            history.push("/admin_home")
                            getActions().getUsers();

                        }
                    })
            },
            logOut: () => {
                sessionStorage.removeItem('currentUser')
                sessionStorage.removeItem('isAuthenticated')
                setStore({
                    isAuthenticated: false,
                    currentUser: {},
                })
            },
            isAuthenticated: () => {
                if (sessionStorage.getItem('currentUser') && sessionStorage.getItem('isAuthenticated')) {
                    setStore({
                        isAuthenticated: sessionStorage.getItem('isAuthenticated'),
                        currentUser: JSON.parse(sessionStorage.getItem('currentUser'))
                    })
                }
            },

            handleChange: e => {
                setStore({
                    [e.target.name]: e.target.value
                });
            },

            createUser: (history) => {
                const store = getStore();
                const data = {
                    name: store.name,
                    last_name: store.last_name,
                    email: store.email,
                    password: store.password,
                }
                fetch(store.path + '/api/users', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + store.currentUser.access_token
                    }

                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        if (data.msg) {
                            setStore({
                                createUser_Error: data
                            })
                        }
                        else {
                            setStore({
                                name: '',
                                last_name: '',
                                email: '',
                                password: '',
                                createUser_Error: null,
                            });
                        }
                        getActions().getUsers();
                    })
            },

            getUsers: () => {
                const store = getStore();
                fetch(store.path + '/api/users', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + store.currentUser.access_token
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            all_users: data
                        })
                    })
            },
        },
    };
}

export default getState;