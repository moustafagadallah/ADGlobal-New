//
//  KeyBoardHandling.swift
//  Global On
//
//  Created by Al Wefaq on 9/14/20.
//  Copyright © 2020 Global On. All rights reserved.
//


import UIKit
import IQKeyboardManagerSwift

class KeyboardHandler: NSObject {
    
    static let shared: KeyboardHandler = {
        return KeyboardHandler()
    }()
    
    func enableHandlingKeyboard() {
        
        setHandlingKeyboard(enable: true)
    }
    
    func disableHandlingKeyboard() {
        
        setHandlingKeyboard(enable: false)
    }
    
    private func setHandlingKeyboard(enable: Bool) {
    
        IQKeyboardManager.shared.enable = enable
        IQKeyboardManager.shared.shouldResignOnTouchOutside = true
    }
}
