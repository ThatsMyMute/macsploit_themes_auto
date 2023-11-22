define("ace/theme/tomorrow_night", ["require", "exports", "module", "ace/lib/dom"], function(e, t, n) {
  t.isDark = !0;
  t.cssClass = "ace-tomorrow_night-theme";
  t.cssText = `
    .ace-tomorrow_night-theme .ace_gutter {
      background: transparent;
      color: #6600ff;  
    }
    
    .ace-tomorrow_night-theme .ace_print-margin {
      width: 1px;
      background: transparent;
    }
    
    .ace-tomorrow_night-theme {
      background: url('https://cdn.discordapp.com/attachments/1145689059952447539/1177023220713541702/Usign-Gradients-Featured-Image.jpg?ex=6570ff4b&is=655e8a4b&hm=c8d37417e4f83c12315f0ba47adbc3a139ee03066430255fe496564a86374049&') no-repeat center center fixed;
      background-size: cover;
      color: #ede8e8; 
      text-shadow: #ff6f00;
      border: #edebeb;
    }
    
    .ace-tomorrow_night-theme .ace_marker-layer {
      background: transparent;
    }
    
    .ace-tomorrow_night-theme .ace_selection {
      background-color: rgba(77, 0, 0, 0.6);
    }
    
    .ace-tomorrow_night-theme.ace_multiselect .ace_selection.ace_start {
      box-shadow: none;
    }
    
    .ace-tomorrow_night-theme .ace_step {
      background: transparent;
    }
    
    .ace-tomorrow_night-theme .ace_bracket {
      background: transparent;
    }
    
    .ace-tomorrow_night-theme .ace_bracket-start {
      background: transparent;
    }
    
    .ace-tomorrow_night-theme .ace_bracket-unmatched {
      margin: -1px 0 0 -1px;
      border: none;
    }
    
    .ace-tomorrow_night-theme .ace_active-line {
      background: transparent;
    }
    
    .ace-tomorrow_night-theme .ace_gutter-active-line {
      background-color: transparent;
    }
    
    .ace-tomorrow_night-theme .ace_selected-word {
      border: none;
      background-color: rgba(225,93,214, 0.1);
    }
    
    .ace-tomorrow_night-theme .ace_invisible {
      color: transparent;
    }
    
    .ace-tomorrow_night-theme .ace_keyword,
    .ace-tomorrow_night-theme .ace_meta,
    .ace-tomorrow_night-theme .ace_storage,
    .ace-tomorrow_night-theme .ace_storage.ace_type {
      color: #6600ff; 
    }
    
    .ace-tomorrow_night-theme .ace_keyword.ace_operator {
      color: #6600ff; 
    }
    
    .ace-tomorrow_night-theme .ace_constant.ace_character,
    .ace-tomorrow_night-theme .ace_constant.ace_language,
    .ace-tomorrow_night-theme .ace_constant.ace_numeric,
    .ace-tomorrow_night-theme .ace_keyword.ace_other.ace_unit,
    .ace-tomorrow_night-theme .ace_support.ace_constant,
    .ace-tomorrow_night-theme .ace_variable.ace_parameter {
      color: #6600ff;  
    }
    
    .ace-tomorrow_night-theme .ace_constant.ace_other {
      color: #c70f02;
    }
    
    .ace-tomorrow_night-theme .ace_invalid {
      color: #c70f02;
      background-color: transparent;
    }
    .ace-tomorrow_night-theme .ace_invalid.ace_deprecated {
      color: #c70f02;
      background-color: transparent;
    }
    
    .ace-tomorrow_night-theme {
      text-shadow: 
        -0.8px -0.8px 0 #6600ff,
        0.7px -0.8px 0 #6600ff,
        -0.8px 0.8px 0 #6600ff,
        0.8px 0.8px 0 #6600ff;
    }
  `;
  
  var r = e("../lib/dom");
  r.importCssString(t.cssText, t.cssClass);
});
