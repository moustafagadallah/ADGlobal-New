//
//  String+Localization.swift
//  365Drive
//
//  Created by Ahmed Naguib on 11/20/19.
//  Copyright © 2019 Al Wefaq Rent a Car. All rights reserved.
//

import Foundation

extension String {
    
    var localized: String {
        
        return NSLocalizedString(self, comment: self)
    }
    
    func localized(fromTable tableName: String) -> String {
    
        return NSLocalizedString(self, tableName: tableName, bundle: Bundle.main, value: self, comment: self)
    }
}
