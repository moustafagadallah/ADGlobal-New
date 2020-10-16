//
//  String+Validation.swift
//  365Drive
//
//  Created by Ahmed Naguib on 11/23/19.
//  Copyright © 2019 Al Wefaq Rent a Car. All rights reserved.
//

import UIKit

extension String {
    
    func isValidEmail() -> Bool {
        
        let emailFormat = "[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}"
        return evaluteWithFormat(emailFormat)
    }
    
    func isValidPassword() -> Bool {
        
        let passwordFormat = "^(?=.*[0-9٠-٩])(?=.*[A-Za-zء-ي]).{6,}$"
        return evaluteWithFormat(passwordFormat)
    }
    
    func isValidMobile() -> Bool {
        
        let mobileFormat = "^[0-9٠-٩]{8,16}$"
        return evaluteWithFormat(mobileFormat)
    }
    
    func isValidDocumentId() -> Bool {
        
        let documentIdFormat = "^(10|١٠)[0-9٠-٩]{8}$"
        return evaluteWithFormat(documentIdFormat)
    }
    
    func isValidResidencyNumber() -> Bool {
        
        let residencyFormat = "^(2|٢)[0-9٠-٩]{9}$"
        return evaluteWithFormat(residencyFormat)
    }
    
    func isValidName() -> Bool {
        
        let userNameFormat = "^[\\u0600-\\u06FFa-zA-Z\\s']+$"
        return evaluteWithFormat(userNameFormat)
        
    }
    
    func evaluteWithFormat(_ format: String) -> Bool {
        
        let emailPredicate = NSPredicate(format:"SELF MATCHES %@", format)
        return emailPredicate.evaluate(with: self)
    }
}
