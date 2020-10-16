//
//  UIControl.swift
//  365Drive
//
//  Created by Ahmed Naguib on 11/26/19.
//  Copyright © 2019 Al Wefaq Rent a Car. All rights reserved.
//

import UIKit

extension UIControl {
    
    @IBInspectable
    var dimmed: Bool {
        
        set {
            isEnabled = !newValue
            alpha = newValue ? AlphaStyles.disabled : AlphaStyles.enabled
        }
        get {
            return !isEnabled
        }
    }

}


