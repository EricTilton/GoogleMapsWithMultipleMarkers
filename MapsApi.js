import Axios from 'axios'
import WebApiUrl from './WebApiUrl';


class MapsApi {

    static LawSchoolGetAll(LawSchoolSuccess, error) {
        Axios.get(WebApiUrl + "lawschoolclinic/getall", { withCredentials: true })
            .then(LawSchoolSuccess)
            .catch(error);
    }

    static LawClinicGetAll(LawClinicSuccess, error) {
        Axios.get(WebApiUrl + "lawclinic/getall", { withCredentials: true })
            .then(LawClinicSuccess)
            .catch(error);
    }
}

export default MapsApi