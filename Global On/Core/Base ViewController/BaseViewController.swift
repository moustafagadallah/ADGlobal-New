//
//  BaseViewController.swift
//  365Drive
//
//  Created by Ahmed Naguib on 11/20/19.
//  Copyright © 2019 Al Wefaq Rent a Car. All rights reserved.
//

import UIKit

class BaseViewController: UIViewController {

    
//    // MARK: - View Life Cycle
//    
    override func viewDidLoad() {
        super.viewDidLoad()
        
//        setupBackBarButtonItem()
//        setupNavigationBarTitle()
//        localizeStrings()
    }
//    
//    
//    // MARK: - Setup
//    
//    func setupNavigationBarTitle() {
//        
//        let attributes = [NSAttributedString.Key.foregroundColor: UIColor.weemBlack,
//                          NSAttributedString.Key.font: UIFont.montserratBold(fontSize: 16.0)
//        
//        ]
//        
//        navigationController?.navigationBar.titleTextAttributes = attributes as [NSAttributedString.Key : Any]
//    }
//    
//    func setupBackBarButtonItem(imageName: String? = nil) {
//        
//        if self.navigationController?.viewControllers.first == self {
//
//            navigationItem.leftBarButtonItem = nil
//
//        } else {
//            
//        let backImg = UIImage(named: imageName ?? "Back")?.withRenderingMode(UIImage.RenderingMode.alwaysOriginal)
//
//        navigationItem.leftBarButtonItem = UIBarButtonItem(image: backImg,
//                                                           style: .plain,
//                                                           target: self,
//                                                           action: #selector(backAction))
//        }
//        
//    }
//    
//    
//    // MARK: - Navigation Bar Style
//
//    func setupNavigationControllerStyle() {
//        
////        self.navigationController?.navigationBar.barTintColor = UIColor.lightGreenColor
////        self.navigationController?.navigationBar.tintColor = UIColor.darkBlueColor
////        self.navigationController?.navigationBar.tintAdjustmentMode = .normal
//    }
//    
//    func resetNavigationControllerStyle() {
//        
////        self.navigationController?.navigationBar.barTintColor = isDarkModeEnabled ? .black : .white
////        self.navigationController?.navigationBar.tintColor = UIColor.darkBlueColor
//    }
//    
//    
//    // MARK: - Actions
//
//    @objc func backAction() {
//        
//        self.navigationController?.popViewController(animated: true)
//    }
//    
//    
//    // MARK: - Localization
//
   func localizeStrings() {}

}
