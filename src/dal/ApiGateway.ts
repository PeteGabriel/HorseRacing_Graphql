import got from "got";


export class ApiGateway {

    private host = "https://horse-racing.p.rapidapi.com"
    private apiUrl = `${this.host}/racecards`;
    private commonHeaders = {
        'x-rapidapi-key': process.env.API_KEY,
        'x-rapidapi-host': 'horse-racing.p.rapidapi.com'
    }

    async getEvents(query?: Object): Promise<string> {
        let options = {
            headers: this.commonHeaders,
            params: query
        }

        const resp = await got(this.apiUrl, options)
        if (resp.statusCode < 200 || resp.statusCode >= 300 ){
            //TODO better logging
            console.log("Code: " + resp.statusCode)
            console.log(resp.body)
            return ""
        }
        return resp.body
    }

}