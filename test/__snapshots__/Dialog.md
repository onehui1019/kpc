# `Dialog`

#### `should show correctly when render with value is true`

```
"<div class=\"k-overlay c-fade-appear\"></div><div class=\"k-dialog animate-appear\" style=\"left: ; top: ;\"><div class=\"k-header\"><span class=\"k-title\">提示</span><button class=\"k-btn k-none k-btn-icon k-close\" title=\"关闭\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-body\">test</div><div class=\"k-footer c-clearfix\"><button class=\"k-btn k-default\" tabindex=\"0\" type=\"button\"><span>取消</span></button><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>确认</span></button></div></div>"
```

#### `should prepend conent to block correctly`

```
"
                            dialog footer
                            <button class=\"k-btn k-default\" tabindex=\"0\" type=\"button\"><span>取消</span></button><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>确认</span></button>"
```

#### `basic test`

```
"<div class=\"k-header\"><span class=\"k-title\">Dialog Title</span><button class=\"k-btn k-none k-btn-icon k-close\" title=\"关闭\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-body\">
        Dialog Body 
    </div><div class=\"k-footer c-clearfix\"><button class=\"k-btn k-default\" tabindex=\"0\" type=\"button\"><span>取消</span></button><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>确认</span></button></div>"
```

#### `methods test`

```
"<div class=\"k-header\"><span class=\"k-title\">Dialog Title</span><button class=\"k-btn k-none k-btn-icon k-close\" title=\"关闭\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-body\">
        Dialog Body 
    </div><div class=\"k-footer c-clearfix\"><button class=\"k-btn k-default\" tabindex=\"0\" type=\"button\"><span>取消</span></button><button class=\"k-btn k-primary k-loading k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-load-c icon-loading\"></i><span>确认</span></button></div>"
```

```
"<div class=\"k-header\"><span class=\"k-title\">Dialog Title</span><button class=\"k-btn k-none k-btn-icon k-close\" title=\"关闭\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-body\">
        Dialog Body 
    </div><div class=\"k-footer c-clearfix\"><button class=\"k-btn k-default\" tabindex=\"0\" type=\"button\"><span>取消</span></button><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>确认</span></button></div>"
```

```
"<div class=\"k-header\"><span class=\"k-title\">Dialog Title</span><button class=\"k-btn k-none k-btn-icon k-close\" title=\"关闭\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-body\">
        Dialog Body 
    </div><div class=\"k-footer c-clearfix\"><button class=\"k-btn k-default\" tabindex=\"0\" type=\"button\"><span>取消</span></button><button class=\"k-btn k-primary k-disabled\" tabindex=\"-1\" type=\"button\"><span>确认</span></button></div>"
```

```
"<div class=\"k-header\"><span class=\"k-title\">Dialog Title</span><button class=\"k-btn k-none k-btn-icon k-close\" title=\"关闭\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-body\">
        Dialog Body 
    </div><div class=\"k-footer c-clearfix\"><button class=\"k-btn k-default\" tabindex=\"0\" type=\"button\"><span>取消</span></button><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>确认</span></button></div>"
```

```
"<div class=\"k-header\"><span class=\"k-title\">Dialog Title</span><button class=\"k-btn k-none k-btn-icon k-close\" title=\"关闭\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-body\">
        Dialog Body 
    </div><div class=\"k-footer c-clearfix\"><button class=\"k-btn k-default\" tabindex=\"0\" type=\"button\"><span>取消</span></button><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>确认</span></button></div>"
```

#### `demos test`

```
"<div class=\"k-header\"><span class=\"k-title\">Dialog Title</span><button class=\"k-btn k-none k-btn-icon k-close\" title=\"关闭\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-body\">
        Dialog Body 
    </div><div class=\"k-footer c-clearfix\"><button class=\"k-btn k-default\" tabindex=\"0\" type=\"button\"><span>取消</span></button><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>确认</span></button></div>"
```

```
"<div class=\"k-header\"><div class=\"k-title\"><i class=\"ion-person\"></i>
                Custom Header
            </div><button class=\"k-btn k-none k-btn-icon k-close\" title=\"关闭\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-body\">

        Dialog Body 

        </div><div class=\"k-footer c-clearfix\">
            Custom Footer
            <button class=\"k-btn k-default\" tabindex=\"0\" type=\"button\"><span>取消</span></button><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>确认</span></button></div>"
```

```
"<div class=\"k-header\"><span class=\"k-title\">Dialog Title</span><button class=\"k-btn k-none k-btn-icon k-close\" title=\"关闭\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-body\">Dialog Body</div><div class=\"k-footer c-clearfix\"><button class=\"k-btn k-default\" tabindex=\"0\" type=\"button\"><span>取消</span></button><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>确认</span></button></div>"
```

```
"<div class=\"k-header\"><span class=\"k-title\">Extends Dialog</span><button class=\"k-btn k-none k-btn-icon k-close\" title=\"关闭\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-body\">
        Hello
    </div><div class=\"k-footer c-clearfix\"><button class=\"k-btn k-default\" tabindex=\"0\" type=\"button\"><span>取消</span></button><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>确认</span></button></div>"
```

```
"<div class=\"k-header\"><span class=\"k-title\">Dialog Title</span><button class=\"k-btn k-none k-btn-icon k-close\" title=\"关闭\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-body\">
                Size: large</div><div class=\"k-footer c-clearfix\"><button class=\"k-btn k-default\" tabindex=\"0\" type=\"button\"><span>取消</span></button><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>确认</span></button></div>"
```

#### `async close`

```
"<div class=\"k-header\"><span class=\"k-title\">Customized ok callback</span><button class=\"k-btn k-none k-btn-icon k-close\" title=\"关闭\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-body\"><form class=\"k-form k-horizontal\" novalidate=\"\"><div class=\"k-form-item\"><label class=\"k-label\">Code:</label><div class=\"k-content\"><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"please enter digits\"></div></div></div></div></form></div><div class=\"k-footer c-clearfix\"><button class=\"k-btn k-default\" tabindex=\"0\" type=\"button\"><span>取消</span></button><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>确认</span></button></div>"
```

#### `async open`

```
"<div class=\"k-header\"><span class=\"k-title\">Async Open Dialog</span><button class=\"k-btn k-none k-btn-icon k-close\" title=\"关闭\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-body\">
        Hello KPC</div><div class=\"k-footer c-clearfix\"><button class=\"k-btn k-default\" tabindex=\"0\" type=\"button\"><span>取消</span></button><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>确认</span></button></div>"
```

#### `static methods`

```
"<div class=\"k-header\"><span class=\"k-title\"></span></div><div class=\"k-body\"><div class=\"k-tip-icon\"><i class=\"k-icon ion-ios-checkmark\"></i></div>test</div><div class=\"k-footer c-clearfix\"><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>确认</span></button></div>"
```

```
"<div class=\"k-header\"><span class=\"k-title\"></span><button class=\"k-btn k-none k-btn-icon k-close\" title=\"关闭\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-body\"><div class=\"k-tip-icon\"></div>test</div><div class=\"k-footer c-clearfix\"><button class=\"k-btn k-default\" tabindex=\"0\" type=\"button\"><span>取消</span></button><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>确认</span></button></div>"
```

