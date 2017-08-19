/*
Created by Hasmukh K Mistry
Date: 14-05-2012
Plugin Name : URL SHORTNER
*/
CKEDITOR.plugins.add('paintIt',
{
    init: function(editor)
    {
		editor.addCommand( 'paintIt', new CKEDITOR.dialogCommand( 'paintIt' ) );
		CKEDITOR.dialog.add('paintIt', this.path + 'dialogs/paintIt.js');
		editor.ui.addButton( 'paintIt',
		{
			label: 'Draw an Image',
			command: 'paintIt',
			icon: this.path + 'images/paint.png'
		});
    }
});
