CKEDITOR.dialog.add( 'paintIt', function( editor )
{

	return {
		/*
			title : // title in string,
			minWidth : //number of pixels,
			minHeight : //number of pixels,
			buttons: //array of button definitions,
			onOk: //function,
			onLoad: //function,
			onShow: //function,
			onHide: //function,
			onCancel: //function,
			resizable: // none,width,height or both  ,
			contents: //content definition, basically the UI of the dialog
		*/
		title : 'Draw an Image',
		minWidth : 340,
		minHeight : 340,
		contents :[{
					id : 'paintIt',
					label : 'paintIt',
					elements :
					[{
								type : 'html',						
								html : '<center><iframe src="ckeditor/plugins/paintIt/index.html" style="height:380px;width:340px;"></iframe></center>'	
					 }]
				  }]
	};
});
