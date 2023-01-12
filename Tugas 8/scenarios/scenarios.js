const scenarios = {
    "createUser" : {
        description : "[createUser] Create User API",
        testCases : {
            case1 : '[@TC1] Create User',
        }
    },
    
    "getUserByName" : {
        description : "[GetUserByName] Get User API",
        testCases : {
            case1 : '[@TC2] Get data User by Name',
        }
    },

    "updateUser" : {
        description : "[@UpdateUser] Update User API",
        positiveCase : {
            case1 : '[@TC3] User berhasil mengupdate data Occupation dan Nationality.'
        },

        negativeCase : {
            case1 : '[@TC4] User gagal mengupdate data ketika age bernilai 0, ketika data hobbies merupakan empty array, dan ketika data id null.'
        }
    },

    "getUserByID" : {
        description : "[GetUserByID] Get User API",
        positiveCase : {
            case1 : '[@TC5] User menggunakan data user id yang valid.'
        },

        description : "[GetUserByID] Get User API",
        negativeCase : {
            case1 : '[@TC6] User gagal mendapatkan data ketika data id yang diinputkan invalid.'
        }
    }
}

module.exports = scenarios