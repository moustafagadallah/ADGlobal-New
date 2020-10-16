//
//  KeyBoarDissmisable.swift
//  Global On
//
//  Created by Al Wefaq on 9/14/20.
//  Copyright © 2020 Global On. All rights reserved.
//

import Foundation

@objc protocol KeyboardDismissable {
    
    @objc optional func dismissKeyboard()
}
