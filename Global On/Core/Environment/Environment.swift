//
//  Environment.swift
//  Global On
//
//  Created by Al Wefaq on 9/13/20.
//  Copyright © 2020 Global On. All rights reserved.
//

import Foundation
import TTGSnackbar

#if DEBUG
let environment: Environment = Environment.testing
#else
let environment: Environment = Environment.production
#endif


enum Environment {
    
    case testing
    case production
    
    
    var baseURL: String {
        
        switch self {
            
        case .testing:
            return "http://172.16.30.5:5000"
            
        case .production:
            return "http://172.16.30.5:5000"
        }
    }
    
    var mediaURL: String {
        
        switch self {

        case .testing:
            return "http://172.16.30.5/Webadmin/Media/"
            
        case .production:
            return "https://www.alwefaq.com/Admin/Media/"
        }
    }
    
    var paymentURL: String {
        
        switch self {

        case .testing:
            return "http://172.16.30.5/website/Booking/PaymentDone/"
            
        case .production:
            return "https://www.alwefaq.com/Booking/PaymentDone/"
        }
    }
}

