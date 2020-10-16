//
//  LoginVC.swift
//  Global On
//
//  Created by Al Wefaq on 9/14/20.
//  Copyright © 2020 Global On. All rights reserved.
//

import UIKit

class LoginVC: BaseViewController {

    
    class func initializeFromStoryboard() -> LoginVC {
           
        let storyboard = UIStoryboard(name: Storyboards.Login, bundle: nil)
           return storyboard.instantiateViewController(withIdentifier: String(describing: LoginVC.self)) as! LoginVC
       }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        print("hi")
    }



}
