//
//  Fonts.swift
//  365Drive
//
//  Created by Ahmed Naguib on 11/22/19.
//  Copyright © 2019 Al Wefaq Rent a Car. All rights reserved.
//

import UIKit


// MARK : - Cairo Font

extension UIFont {
    
    public static func cairoBlack(fontSize: CGFloat) -> UIFont? {
        
        return UIFont(name: Fonts.CairoBlack, size: fontSize)
    }
    
    public static func cairoBold(fontSize: CGFloat) -> UIFont? {
        
        return UIFont(name: Fonts.CairoBold, size: fontSize)
    }
    
    public static func cairoExtraLight(fontSize: CGFloat) -> UIFont? {
        
        return UIFont(name: Fonts.CairoExtraLight, size: fontSize)
    }
    
    public static func cairoLight(fontSize: CGFloat) -> UIFont? {
        
        return UIFont(name: Fonts.CairoLight, size: fontSize)
    }
    
    public static func cairoRegular(fontSize: CGFloat) -> UIFont? {
        
        return UIFont(name: Fonts.CairoRegular, size: fontSize)
    }
    
    public static func cairoSemiBold(fontSize: CGFloat) -> UIFont? {
        
        return UIFont(name: Fonts.CairoSemiBold, size: fontSize)
    }
    
    public static func MontserratBold(fontSize: CGFloat) -> UIFont? {
        
        return UIFont(name: Fonts.MontserratBold, size: fontSize)
    }
    
    public static func MontserratRegular(fontSize: CGFloat) -> UIFont? {
        
        return UIFont(name: Fonts.MontserratRegular, size: fontSize)
    }
    
    
    public static var logoutItemFont: UIFont {
        
        return UIFont.MontserratBold(fontSize: 14)!
    }
    
}


// MARK : - Montserrat Font

extension UIFont {
    
    public static func montserratBlack(fontSize: CGFloat) -> UIFont? {
        
        return UIFont(name: Fonts.MontserratBlack, size: fontSize)
    }
    
    public static func montserratBold(fontSize: CGFloat) -> UIFont? {
        
        return UIFont(name: Fonts.MontserratBold, size: fontSize)
    }
    
    public static func montserratExtraLight(fontSize: CGFloat) -> UIFont? {
        
        return UIFont(name: Fonts.MontserratExtraLight, size: fontSize)
    }
    
    public static func montserratLight(fontSize: CGFloat) -> UIFont? {
        
        return UIFont(name: Fonts.MontserratLight, size: fontSize)
    }
    
    public static func montserratMedium(fontSize: CGFloat) -> UIFont? {
        
        return UIFont(name: Fonts.MontserratMedium, size: fontSize)
    }
    
    public static func montserratRegular(fontSize: CGFloat) -> UIFont? {
        
        return UIFont(name: Fonts.MontserratRegular, size: fontSize)
    }
    
    public static func montserratSemiBold(fontSize: CGFloat) -> UIFont? {
        
        return UIFont(name: Fonts.MontserratSemiBold, size: fontSize)
    }
}
