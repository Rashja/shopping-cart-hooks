type headres = {
    'Content-Type': string;
}
class ApiService {
    private _method:string='GET'
    private _headers:headres={'Content-Type': 'application/json'}
    constructor(private _authToken?:string){
    }
    get authToken () {
        return this._authToken
    }
    get method () {
        return this._method
    }
    set method (newMethod) {
        this._method = newMethod
    }
    get headers () {
        return this._headers
    }
    set headers (newHeaders) {
        this._headers = newHeaders
    }
    getRequest(reBody?:any){
        return {
          method : this._method,
          headers : this._headers,
          body:JSON.stringify(reBody)
        }
      }
}
export default ApiService;