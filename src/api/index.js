import axios from 'axios';
import * as utils from './utils'

const TIMEOUT = 20000
const SaveListPositionByCode = 'https://gps.smartlog.vn/v1/gps?t=zikwz61gzjcrb9hn9qdeiqwk9gf8xpt'

const objToQueryString = obj =>
    Object.keys(obj)
        .map((k) => {
            if (Array.isArray(obj[k])) {
                return `${k}=${JSON.stringify(obj[k])}`
            }
            return `${k}=${obj[k]}`
        })
        .join('&')

const callApi = async (url, options) => {
    try {
        const response = await axios({
            ...options,
            url,
            timeout: TIMEOUT
        })
        if (response.status >= 200 && response.status < 300) {
            const json = response.data
            log.response = json
            logger.info(log)
            if (json) return utils.returnSuccessResponse(json)
        }
    } catch (error) {
        if (error.response) {
            const { data } = error.response
            log.response = data
            logger.warn(log)

            if (data && data.errors && Array.isArray(data.errors) && data.errors.length > 0 && data.errors[0].message) {
                return utils.returnErrorResponse(data.errors[0].message)
            }
            return utils.returnErrorResponse(data.msg ? data.msg : data.statusCode)
        } else if (error.request) {
            return utils.returnErrorResponse('Không kết nối server')
        }
        logger.error({
            ...log,
            error: {
                message: error.message,
                stack: error.stack,
            },
        })
        return utils.returnErrorResponse(error.message)
    }
    return null
}