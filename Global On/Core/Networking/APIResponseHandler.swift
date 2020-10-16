//
//  APIResponseHandler.swift
//  Global On
//
//  Created by Al Wefaq on 9/13/20.
//  Copyright © 2020 Global On. All rights reserved.
//

import Foundation
import UIKit

class APIResponseHandler: NSObject {
    
    func handleResponse(_ responseModel: APIResponseModel, endPoint: EndPoint, success: APISuccess, failure: APIFailure) {
        
        let result = responseModel.result?.value
        
        if responseModel.success ?? false {

            success?(result)
            
        } else {
            
            GeneralErrorHandling.handleError(for: responseModel, endPoint: endPoint, success: success, failure: failure)
        }
    }
}
