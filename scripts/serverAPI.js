import axios from "axios";


const server = 'http://192.168.0.8:1337'

async function Logining(identifier,pass) {
    await axios.post(`${server}/api/auth/local`, {
        'identifier':identifier,
        'password':pass,
    })
        .then((response) => {
            console.log(response.data.jwt)
            storeData(response.data.jwt)
            Alert.alert('Вы вошли!')
        }, (error) => {
            if (error.response){
                return 'true'
            }else if(error.request){
                return 'false'
            }
        })
}

export default Logining()