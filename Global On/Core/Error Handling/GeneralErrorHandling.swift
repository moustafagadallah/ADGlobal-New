//
//  GeneralErrorHandling.swift
//  365Drive
//
//  Created by Ahmed Naguib on 12/20/19.
//  Copyright © 2019 Al Wefaq Rent a Car. All rights reserved.
//

import UIKit

class GeneralErrorHandling: BaseModel {
    
  //  static var retryRequestVC = RetryRequestVC.initializeFromStoryboard()

    class func handleError(for response: APIResponseModel, endPoint: EndPoint, success: APISuccess, failure: APIFailure) {
        
        let error = response.error
        let validationError: ValidationErrorModel? = error?.validationErrors?.first as? ValidationErrorModel
        let errorMsg = validationError?.message ?? error?.body ?? error?.title
        
        if !(endPoint.configurations?.handleErrorsManually == true) {
            
//            showErrorMessage(errorMsg)
            
            if !(endPoint.configurations?.hideRetryRequestView == true) {

             //   showRetryRequest(with: errorMsg, endPoint: endPoint, success: success, failure: failure)
            }
        }
        
        failure?(errorMsg, nil)
    }
    
    class func showErrorMessage(_ error: String?) {
        
        SnackBar.showMessage(error)
    }
    
//    class func showRetryRequest(with msg: String? = nil, endPoint: EndPoint, success: APISuccess, failure: APIFailure) {
//        
//        retryRequestVC.dismiss(animated: true, completion: {
//        
//            retryRequestVC = RetryRequestVC.initializeFromStoryboard()
//            retryRequestVC.errorText = msg
//            retryRequestVC.retryAction = {
//                            
//                LoadingIndicator.showActivityIndicator()
//                
//                NetworkManager.manager.request(endPoint: endPoint, success: success, failure: failure)
//            }
//            
//            UIViewController.topMostViewController()?.present(retryRequestVC, animated: true, completion: nil)
//        })
//
//    }
}
