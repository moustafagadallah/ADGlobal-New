//
//  String+Localization.swift
//  Global On
//
//  Created by Al Wefaq on 9/13/20.
//  Copyright © 2020 Global On. All rights reserved.
//

import Foundation
import UIKit

extension String {
    
    var localized: String {
        
        return NSLocalizedString(self, comment: self)
    }
    
    func localized(fromTable tableName: String) -> String {
    
        return NSLocalizedString(self, tableName: tableName, bundle: Bundle.main, value: self, comment: self)
    }
}
