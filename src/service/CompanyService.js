import HttpClient, {APIMapping} from '../http';

export default class CompanyService {

    static client = new HttpClient(APIMapping.companyService);

    //domain -> can also be an email
    static createCompany(companyName, companyUrl, domain) {
        return CompanyService.client.makeRequetSimple({
            companyName,
            companyUrl,
            domain
        }, '/company', 'POST');
    }

    static usePreset(presets) {
        return CompanyService.client.makeRequetSimple({
            presets
        }, '/company/usepreset', 'PUT');
    }

    static updateCompany(body) {
        return CompanyService.client.makeRequetSimple(body, '/company', 'PUT');
    }

    static findCompany(companyId) {
        return CompanyService.client.makeRequetSimple({}, `/company/${encodeURIComponent(companyId)}`, 'GET');
    }

    static memberCountByEMailAddress(mailaddress) {
        return CompanyService.client.makeRequetSimple({
            mailaddress: mailaddress
        }, '/company/numberOfUsers', 'PUT');
    }
}

const StatusMapping = {
    create: {
        ALREADY_EXIST: 400,
        MANDANTORY_FIELD_NOT_FILLED: 422,
        INTERNAL_SERVER_ERROR: 500
    },
    findByEmail: {
        NO_COMPANY_FOUND: 204,
        INTERNAL_SERVER_ERROR: 500
    },
    findById: {
        ID_NOT_FOUND: 204,
        INTERNAL_SERVER_ERROR: 500
    }
};

export {
    StatusMapping
};