/* Singleline functions
---------------------------------------------------------------- */

function $d(d){
	return document.getElementById(d);
}

var addeventatc = function(){
	
	// Variables
	var atc_loaded = false, protocol, base_path, base_dom, icon_path, dropzcx = 1, license, mouseover = false, css = true, btn_found = false, btn_expo = false, btn_obj, mouseover_active = false, mouseover_timer, zindex = 1;
	var dropdown_order = '', drop_appleical = true, drop_google = true, drop_office365 = true, drop_outlook = true, drop_outlookcom = true, drop_yahoo = true, drop_facebook = true;
	var label_appleical = 'Apple', label_google = 'Google <em>(online)</em>', label_office365 = 'Office 365 <em>(online)</em>', label_outlook = 'Outlook', label_outlookcom = 'Outlook.com <em>(online)</em>', label_yahoo = 'Yahoo <em>(online)</em>', label_fb_event = 'Facebook Event';
	var reg_button_click = null, reg_button_mouseover = null, reg_button_mouseout = null, reg_button_dropdown_show = null, reg_button_dropdown_hide = null, reg_button_dropdown_click = null, keyboardnav = false, reg_timer;

	return {
		initialize:function(){

			// Loaded?
			if(!atc_loaded){
				
				// Set loaded
				atc_loaded = true;
				
				// Set async ready
				try{addeventasync();}catch(e){}

				// Get protocol
				protocol = 'https:';

				// Set base domain
				base_dom = 'addevent.com';

				// Set path
				base_path = protocol + '//' + base_dom;

				// Icon path, SVG supported?
				icon_path = (typeof SVGRect != 'undefined' ? 'https://cdn.addevent.com/libs/imgs/icon-calendar-t1.svg' : 'https://cdn.addevent.com/libs/imgs/icon-calendar-t5.png');

				// Apply temporary css
				addeventatc.trycss();

				// Get buttons
				addeventatc.generate();

			}
			
		},
		generate:function(){

			// Get items
			var items = document.getElementsByTagName('*');
			
			// Loop
			for(var d=0;d<items.length;d+=1){
			
				// Has class?
				if(addeventatc.hasclass(items[d], 'addeventatc')){

					// Fix JS loop closure
					(function(){

						// Button number / id
						var button_id = 'addeventatc' + dropzcx;

						// Set attributes
						items[d].id = button_id;

						// Keep title or remove it
						if(addeventatc.hasclass(items[d], 'keeptitle')){
							// Don't remove the title
						}else{
							items[d].title = '';
						}

						items[d].style.visibility = 'visible';
						items[d].setAttribute('aria-haspopup', 'true');
						items[d].setAttribute('aria-expanded', 'false');
						items[d].setAttribute('tabindex', '0');
						items[d].setAttribute('translate', 'no');
						items[d].setAttribute('data-loaded', 'true');

						// Set event handlers
						if(!mouseover){
							items[d].onclick = function(){

								// Call toogle
								addeventatc.toogle(this,{type:'click',id:button_id});return false;

							};
							items[d].onmouseover = function(){};
							items[d].onmouseout = function(){};
						}else{
							items[d].onclick = function(){return false;};
							items[d].onmouseover = function(){

								// Clear timer
								clearTimeout(mouseover_timer);

								// Call toogle
								addeventatc.toogle(this,{type:'mouseover',id:button_id});

							};
							items[d].onmouseout = function(){

								// Set timer
								mouseover_timer = setTimeout(function(){

									// Call mouseout
									addeventatc.mouseout(this,{type:'mouseout',id:button_id});

								}, 100);

							};
						}

						// Accessibility
						items[d].onkeydown = function(event){

							// Get key code
							var key = event.which || event.keyCode;

							// Prevent scroll
							if(key == '13' || key == '32' || key == '27' || key == '38' || key == '40'){
								event.preventDefault();
							}

							// Enter or space
							if(key == '13' || key == '32'){

								// Keyboard clicked
								addeventatc.keyboardclick(this,{type:'click',id:button_id});

								// Toogle drop down
								addeventatc.toogle(this,{type:'click',id:button_id,keynav:true});

							}

							// ESC
							if(key == '27'){

								// Hide
								addeventatc.hideandreset();

							}

							// Tabulator
							if(key == '9'){

								// Hide
								addeventatc.hideandreset();

							}

							// Key up
							if(key == '38'){
								addeventatc.keyboard(this,{type:'keyboard',id:button_id,key:'up'});
							}

							// Key down
							if(key == '40'){
								addeventatc.keyboard(this,{type:'keyboard',id:button_id,key:'down'});
							}

							// Register
							keyboardnav = true;

						};
						items[d].onblur = function(){

							// Hide on blur if using keyboard navigation
							if(keyboardnav){

								// Hide
								//setTimeout(function(){addeventatc.hideandreset();},300);
								
							}

						};

						// Button element
						var ni = items[d];

						// No CSS?
						if(items[d].getAttribute('data-styling') == 'none' || items[d].getAttribute('data-render') == 'inline-buttons'){
							css = false;
						}

						// Append icon
						if(css){

							// Create element
							var ic = document.createElement('span');

							// Set class
							ic.className = 'addeventatc_icon';

							// Append to button
							ni.appendChild(ic);

						}

						// Add
						dropzcx++;

						// Button found on page
						btn_found = true;

						// Get subs in container
						var subs = items[d].getElementsByTagName('*');
						
						// Loop
						for(var x=0;x<subs.length;x+=1){

							// Does identifier class "atc_node" already exists? If not, apply it
							if(!addeventatc.hasclass(subs[x],'atc_node')){
								if(subs[x].className!=''){
									subs[x].className += ' atc_node notranslate';
								}else{
									subs[x].className += 'atc_node';
								}
							}

						}

						// Render inline clickable buttons?
						if(items[d].getAttribute('data-render')=='inline-buttons'){
							
							// Cancel general toogle event
							items[d].onclick = function(){};

							// Render immediately
							addeventatc.toogle(items[d],{type:'render',id:button_id});

							// Change default settings
							items[d].setAttribute('aria-expanded', 'true');
							items[d].removeAttribute('tabindex');
							items[d].onkeydown = function(){};
							items[d].blur = function(){};

							// Get drop down
							var elm = document.getElementById(button_id+'-drop');

							// Exits?
							if(elm){

								// Set
								elm.setAttribute('aria-hidden', 'false');

								// Get drop down elements
								var subs = elm.getElementsByTagName('SPAN');

								// Loop and add tab indexes
								for(var x=0;x<subs.length;x+=1){

									// List object
									var lob = subs[x];

									// Add tabindex
									subs[x].tabIndex = '0';

									// Add event listener
									subs[x].onkeydown = function(event){

										// Get key code
										var key = event.which || event.keyCode;

										// Enter or space
										if(key == '13' || key == '32'){

											// Click
											event.target.click();

										}

									};

								}

							}

						}

					}());

				}

			}

			// Use default CSS?
			if(css){
				addeventatc.applycss();
			}else{
				addeventatc.removeelement($d('ate_css'));
				addeventatc.removeelement($d('ate_tmp_css'));
				addeventatc.helpercss();
			}
			
			// Button found
			if(btn_found && !btn_expo){

				// Set exposure
				btn_expo = true;

				// Track exposure
				addeventatc.track({
					typ:'exposure',
					cal:''
				});

			}
			
		},
		toogle:function(f,opts){

			// Variables
			var fid, obj, fbevent = false, dir, drop_cont = '', rcrl = false;

			// Get id
			fid = f.id;

			// Object
			obj = $d(fid);

			// Does object exists?
			if(obj){

				// Direct link to a service?
				dir = obj.getAttribute('data-direct');
				
				// Intelligence disabled?
				var auto_intel = obj.getAttribute('data-intel');
				
				// iOS auto handled once?
				var intel_clicked_apple = obj.getAttribute('data-intel-apple');
				
				// Detect OS
				if(addeventatc.agent() == 'ios' && opts.type == 'click' && intel_clicked_apple !== 'true' && auto_intel !== 'false'){
					
					// Set direct
					dir = 'appleical';
					
					// Add attribute
					obj.setAttribute('data-intel-apple', 'true');
					
				}

				// Get objects recurring rule (if any)
				try{

					// Get objects value
					var rch = $d(fid).querySelector('.recurring').innerHTML;

					// Any rule?
					if(rch != ''){rcrl = true;}

				}catch(e){};

				// Get event type (if any) - looking for recurrence
				try{

					// Is the event an recurring one?
					var rch = obj.getAttribute('data-event-type');

					// Any rule?
					if(rch == 'recurring'){rcrl = true;}

				}catch(e){};

				// Any of the supported services?
				if(dir == 'outlook' || dir == 'google' || dir == 'yahoo' || dir == 'hotmail' || dir == 'outlookcom' || dir == 'appleical' || dir == 'apple' || dir == 'facebook'){

					// Only allowed if click event type
					if(opts.type == 'click'){

						// Click
						addeventatc.click({button:fid,service:dir,id:opts.id});

						// Callback trigger: Button click
						if(reg_button_click!=null){addeventatc.trigger('button_click',{id:fid});}

					}

				}else{

					// Reset mouseover if different from previous button
					if(opts.type == 'mouseover' && btn_obj!=obj){

						// Set
						mouseover_active = false;

					}

					// Mouseover active, but mouseover not set or click?
					if(opts.type == 'click' || opts.type == 'render' || opts.type == 'mouseover' && !mouseover_active){

						// Set active
						if(opts.type == 'mouseover'){

							// Set
							mouseover_active = true;

							// Callback trigger: Button mouseover
							if(reg_button_mouseover!=null){addeventatc.trigger('button_mouseover',{id:fid});}

						}

						// Does Facebook variable exists?
						fbevent = addeventatc.getburl({id:fid,facebook:true});

						// No dropdown order specified, set default
						if(dropdown_order==''){
							dropdown_order = 'appleical,google,office365,outlook,outlookcom,yahoo,facebook';
						}

						// Add split
						dropdown_order += ',';

						// Remove spaces
						dropdown_order = dropdown_order.replace(/ /gi, '');

						// Split
						var dda = dropdown_order.split(',');
						
						// Loop
						for(var a=0;a<dda.length;a+=1){

							// Drop down options
							if(drop_appleical && dda[a]=='ical' || drop_appleical && dda[a]=='appleical'){drop_cont += '<span class="ateappleical" id="'+fid+'-appleical" role="menuitem" tabindex="-1">'+label_appleical+'</span>';}
							if(drop_google && dda[a]=='google'){drop_cont += '<span class="ategoogle" id="'+fid+'-google" role="menuitem" tabindex="-1">'+label_google+'</span>';}
							if(drop_office365 && dda[a]=='office365'){drop_cont += '<span class="ateoffice365" id="'+fid+'-office365" role="menuitem" tabindex="-1">'+label_office365+'</span>';}
							if(drop_outlook && dda[a]=='outlook'){drop_cont += '<span class="ateoutlook" id="'+fid+'-outlook" role="menuitem" tabindex="-1">'+label_outlook+'</span>';}
							if(drop_outlookcom && dda[a]=='hotmail' || drop_outlookcom && dda[a]=='outlookcom'){drop_cont += '<span class="ateoutlookcom" id="'+fid+'-outlookcom" role="menuitem" tabindex="-1">'+label_outlookcom+'</span>';}
							if(drop_yahoo && dda[a]=='yahoo' && !rcrl){drop_cont += '<span class="ateyahoo" id="'+fid+'-yahoo" role="menuitem" tabindex="-1">'+label_yahoo+'</span>';}
							
							// Facebook event?
							if(fbevent && dda[a]=='facebook'){
								if(drop_facebook && dda[a]=='facebook'){drop_cont += '<span class="atefacebook" id="'+fid+'-facebook" role="menuitem" tabindex="-1">'+label_fb_event+'</span>';}
							}
							
						}

						// Credits
						if(!addeventatc.getlicense(license)){
							drop_cont += '<em class="copyx"><em class="brx"></em><em class="frs"><a href="https://www.addevent.com" title="" tabindex="-1" id="'+fid+'-home">AddEvent.com</a></em></em>';
						}

						// Drop down container
						var delm = $d(fid+'-drop');

						// No drop down, create one
						if(!delm){

							// Create element
							var nd = document.createElement('span');

							// Attributes
							nd.id = fid+'-drop';
							nd.className = 'addeventatc_dropdown';
							nd.setAttribute('aria-hidden', 'true');
							nd.setAttribute('aria-labelledby', fid);

							// Set content
							nd.innerHTML = drop_cont;

							// Append
							obj.appendChild(nd);

							//if(obj.getAttribute('data-render')=='inline-buttons'){
							//	obj.appendChild(nd);
							//}else{
							//	document.getElementsByTagName('body')[0].appendChild(nd);
							//}

						}

						// Append click
						if($d(fid+'-appleical')){$d(fid+'-appleical').onclick = function(){addeventatc.click({button:fid,service:'appleical',id:opts.id});};}
						if($d(fid+'-google')){$d(fid+'-google').onclick = function(){addeventatc.click({button:fid,service:'google',id:opts.id});};}
						if($d(fid+'-office365')){$d(fid+'-office365').onclick = function(){addeventatc.click({button:fid,service:'office365',id:opts.id});};}
						if($d(fid+'-outlook')){$d(fid+'-outlook').onclick = function(){addeventatc.click({button:fid,service:'outlook',id:opts.id});};}
						if($d(fid+'-outlookcom')){$d(fid+'-outlookcom').onclick = function(){addeventatc.click({button:fid,service:'outlookcom',id:opts.id});};}
						if($d(fid+'-yahoo')){$d(fid+'-yahoo').onclick = function(){addeventatc.click({button:fid,service:'yahoo',id:opts.id});};}
						if($d(fid+'-facebook')){$d(fid+'-facebook').onclick = function(){addeventatc.click({button:fid,service:'facebook',id:opts.id});};}
						if($d(fid+'-home')){$d(fid+'-home').onclick = function(){addeventatc.click({button:fid,service:'home',id:opts.id});};}

						// Show
						addeventatc.show(fid,opts);

					}

				}

				// Set current button object
				btn_obj = obj;

				// Return
				return false;

			}

		},
		click:function(opts){

			// Variables
			var obj, burl, new_window = true, service_url;

			// Reference
			var ref = window.location.href;
			//var ref = location.origin;

			// Ref backup
			//if(typeof location.origin === 'undefined'){ref = location.protocol + '//' + location.host;}

			// Object
			obj = $d(opts.button);

			// Does object exists?
			if(obj){

				// Go to AddEvent.com?
				if(opts.service == 'home'){

					// Service URL
					service_url = 'https://www.addevent.com';

				}else{

					// Get burl
					burl = addeventatc.getburl({id:opts.button,facebook:false});

					// Service URL
					service_url = 'https://www.addevent.com/create/?service=' + opts.service + burl + '&reference=' + ref;

					// Change new window object
					if(opts.service == 'outlook' || opts.service == 'appleical'){

						// Set
						new_window = false;
						
						// Override service URL (if on iOS Chrome, Facebook webapp etc)
						if(addeventatc.usewebcal()){
							service_url = 'webcal://www.addevent.com/create/?uwc=on&service=' + opts.service + burl + '&reference=' + ref;
						}

					}

					// Any "data-id"?
					var btnfid = obj.getAttribute('data-id');

					// In case there is, override the service_url
					if(btnfid!==null){

						if(addeventatc.usewebcal()){
							service_url = 'webcal://www.addevent.com/event/' + btnfid + '+' + opts.service + '/?uwc=on';
						}else{
							service_url = 'https://www.addevent.com/event/' + btnfid + '+' + opts.service;
						}
						
					}

				}

				// Create ghost link if it doesn't exists
				if(!$d('atecllink')){

					// Create a tag
					var atecl = document.createElement("a");

					// Set attributes
					atecl.id = 'atecllink';
					atecl.rel = 'external';
					atecl.setAttribute('data-role','none');
					atecl.innerHTML = '{addeventatc-ghost-link}';
					atecl.style.display = 'none';

					// Append
					document.body.appendChild(atecl);

				}

				// Set ghost link
				var ategl = $d('atecllink');

				// Set target
				if(new_window){
					ategl.target = '_blank';
				}else{
					ategl.target = '_self';
				}

				// Update href
				ategl.href = service_url;

				// Click the ghost link
				addeventatc.eclick('atecllink');

				// Track click
				addeventatc.track({
					typ:'click',
					cal:opts.service
				});

				// Callback trigger: Button dropdown click
				if(reg_button_dropdown_click!=null){

					// Trigger
					addeventatc.trigger('button_dropdown_click',{id:opts.button,service:opts.service});

					// Cancel other trigger events
					try{
						var wevt = event || window.event;
						wevt.stopPropagation();
					}catch(e){}

				}

			}

		},
		mouseout:function(f,opts){

			// Set
			mouseover_active = false;

			// Hide all
			addeventatc.hideandreset();

			// Callback trigger: Button mouseover
			if(reg_button_mouseout!=null){addeventatc.trigger('button_mouseout',{id:opts.id});}

		},
		show:function(id,opts){

			// Get object and drop down
			var obj = $d(id);
			var dro = $d(id + '-drop');

			// Object exists
			if(obj && dro){

				// Get display property
				var dis = addeventatc.getstyle(dro, 'display');

				if(dis == 'block'){

					// Hide all
					addeventatc.hideandreset();

				}else{

					// Reset all
					addeventatc.hideandreset(true);

					// Show
					dro.style.display = 'block';

					// Remove outline
					obj.style.outline = '0';

					// Get highest zindex
					zindex = addeventatc.topzindex();

					// Set zindex
					obj.style.zIndex = zindex + 1;

					// Trim spaces
					obj.className = obj.className.replace(/\s+/g, ' ');

					// Set arias
					obj.setAttribute('aria-expanded', 'true');
					dro.setAttribute('aria-hidden', 'false');

					// Keyboard?
					if(opts.keynav){
						addeventatc.keyboard(this,{type:'keyboard',id:id,key:'down'});
					}

					// Any drop down directions?
					var dddx = obj.getAttribute('data-dropdown-x'), dddy = obj.getAttribute('data-dropdown-y'), o = 'auto', a = 'auto';

					// Set if specified
					if(dddx!=null){a = dddx;}
					if(dddy!=null){o = dddy;}

					// Reset
					dro.style.left = '0px';
					dro.style.top = '0px';
					dro.style.display = 'block';
					
					// Get dimensions
					var oh = parseInt(obj.offsetHeight);
					var ow = parseInt(obj.offsetWidth);
					var dh = parseInt(dro.offsetHeight);
					var dw = parseInt(dro.offsetWidth);
					var por = addeventatc.viewport();
					var porW = parseInt(por.w);
					var porH = parseInt(por.h);
					var porX = parseInt(por.x);
					var porY = parseInt(por.y);
					var pos = addeventatc.elementposition(dro);
					var ox = parseInt(pos.x);
					var oy = parseInt(pos.y);
					var obs = addeventatc.elementposition(obj);
					var obx = obs.x;
					var oby = obs.y;
					var drohy = oy + dh;
					var srchy = porH + porY;
					var drowy = ox + dw;
					var srcwy = porW + porX;
					var drox = 0, dropy = 0;
					var d_c = '';

					// Drop down offset position
					var def_y = oby - ((dh / 2) - (oh)), def_x = (obx - 2);

					// Available display
					if(o=='down' && a=='left'){
						drox = '-2px';dropy = '-2px';d_c = 'topdown';
					}else if(o=='up' && a=='left'){
						drox = '0px';dropy = -(dh-oh-2) + 'px';
					}else if(o=='down' && a=='right'){
						drox = -(dw-ow-2) + 'px';dropy = '-2px';d_c = 'topdown';
					}else if(o=='up' && a=='right'){
						drox = -(dw - ow - 2) + 'px';dropy = -(dh-oh-2) + 'px';
					}else if(o=='auto' && a=='left'){
						drox = '0px';
						if(def_y < porY){dropy = '-2px';d_c = 'topdown';}else if((def_y + dh) > (porY + porH)){dropy = -(dh-oh-2) + 'px';}else{dropy = -((dh/2)-(oh)) + 'px';}
					}else if(o=='auto' && a=='right'){
						drox = -(dw - ow - 2) + 'px';
						if(def_y < porY){dropy = '-2px';d_c = 'topdown';}else if((def_y + dh) > (porY + porH)){dropy = -(dh-oh-2) + 'px';}else{dropy = -((dh/2)-(oh)) + 'px';}
					}else if(o=='down' && a=='auto'){
						if(drowy>srcwy){drox = -(dw - ow - 2) + 'px';}else{drox = '-2px';}
						dropy = '-2px';d_c = 'topdown';
					}else if(o=='up' && a=='auto'){
						if(drowy>srcwy){drox = -(dw - ow - 2) + 'px';}else{drox = '-2px';}
						dropy = -(dh-oh-2) + 'px';
					}else{
						if(def_y < porY){dropy = '-2px';d_c = 'topdown';}else if((def_y + dh) > (porY + porH)){dropy = -(dh-oh-2) + 'px';}else{dropy = -((dh/2)-(oh)) + 'px';}
						if(drowy>srcwy){drox = -(dw - ow - 2) + 'px';}else{drox = '-2px';}
					}
					
					// Set top left
					dro.style.left = drox;
					dro.style.top = dropy;

					// Special direction?
					if(d_c != ''){
						dro.className = dro.className + ' ' + d_c;
					}

					// Append
					setTimeout(function(){
						dro.className = dro.className + ' addeventatc-selected';
					}, 1);

					// Callback trigger: Button click
					if(opts.type == 'click'){
						if(reg_button_click!=null){addeventatc.trigger('button_click',{id:id});}
					}

					// Callback trigger: Button dropdown show
					if(reg_button_dropdown_show!=null){addeventatc.trigger('button_dropdown_show',{id:id});}

				}

			}
			
		},
		hide:function(cls){

			// Variables
			var anyinstance = false;
		
			// Any instances of addeventatc?

			if(typeof cls === 'string' && cls !== '' || cls instanceof String && cls !== ''){
				if(cls.indexOf('addeventatc')>-1 || cls.indexOf('atc_node')>-1){

					// Set
					anyinstance = true;

			    }
		    }

		    // Reset buttons
		    if(!anyinstance){

			    // Hide all
				addeventatc.hideandreset();

			}
			
		},
		hideandreset:function(noreg){

			// Variables
			var button_id = '';

			// Get items
			var items = document.getElementsByTagName('*');
			
			// Loop
			for(var d=0;d<items.length;d+=1){
				if(addeventatc.hasclass(items[d],'addeventatc')){

					// Remove classes
					items[d].className = items[d].className.replace(/addeventatc-selected/gi, '');

					// Remove whitespaces
					items[d].className = items[d].className.replace(/\s+$/, '');

					// Set zindex
					//items[d].style.zIndex = 'auto';

					// Remove outline
					items[d].style.outline = '';

					// Drop down object
					var dro = $d(items[d].id + '-drop');

					// Exists?
					if(dro){

						// Get display property (if display block important in stylesheet)
						var dis = addeventatc.getstyle(dro, 'display');

						// If block, then record the one we are about to close
						if(dis == 'block'){

							// Store
							button_id = items[d].id;
						
						}

						// Hide
						dro.style.display = 'none';

						// Get display property (could be forced by stylesheet to be block important)
						dis = addeventatc.getstyle(dro, 'display');

						// Hidden?
						if(dis !== 'block'){

							// Set aria
							items[d].setAttribute('aria-expanded', 'false');

							// Set aria
							dro.setAttribute('aria-hidden', 'true');

							// Remove
							dro.className = dro.className.replace(/addeventatc-selected/gi, '');
							dro.className = dro.className.replace(/topdown/gi, '');

							// Remove positions
							dro.removeAttribute('style');

						}

						// Get drop down elements
						var subs = dro.getElementsByTagName('SPAN');

						// Loop to find if any is active
						for(var x=0;x<subs.length;x+=1){

							// Find marker class
							var reg = new RegExp('(\\s|^)drop_markup(\\s|$)');

							// Replace
							subs[x].className = subs[x].className.replace(reg, ' ');

							// Remove whitespaces
							subs[x].className = subs[x].className.replace(/\s+$/, '');

							// Reset tabindex
							subs[x].tabIndex = '-1';

						}

					}

				}
			}

			// Callback trigger: Button dropdown hide
			if(!noreg){
				if(reg_button_dropdown_hide!=null){addeventatc.trigger('button_dropdown_hide',{id:button_id});}
			}

		},
		getburl:function(opts){

			// Object
			var obj = $d(opts.id), burl = '', fbevent = false;

			// Exists?
			if(obj){

				// Get children
				var itx = obj.getElementsByTagName('*');
				for(var m=0;m<itx.length;m+=1){

					// Get content, collect
					if(addeventatc.hasclass(itx[m],'_start') || addeventatc.hasclass(itx[m],'start')){burl += '&dstart='+encodeURIComponent(itx[m].innerHTML);}
					if(addeventatc.hasclass(itx[m],'_end') || addeventatc.hasclass(itx[m],'end')){burl += '&dend='+encodeURIComponent(itx[m].innerHTML);}
					if(addeventatc.hasclass(itx[m],'_zonecode') || addeventatc.hasclass(itx[m],'zonecode')){burl += '&dzone='+encodeURIComponent(itx[m].innerHTML);}
					if(addeventatc.hasclass(itx[m],'_timezone') || addeventatc.hasclass(itx[m],'timezone')){burl += '&dtime='+encodeURIComponent(itx[m].innerHTML);}
					if(addeventatc.hasclass(itx[m],'_summary') || addeventatc.hasclass(itx[m],'summary') || addeventatc.hasclass(itx[m],'title')){burl += '&dsum='+encodeURIComponent(itx[m].innerHTML);}
					if(addeventatc.hasclass(itx[m],'_description') || addeventatc.hasclass(itx[m],'description')){burl += '&ddesc='+encodeURIComponent(itx[m].innerHTML);}
					if(addeventatc.hasclass(itx[m],'_location') || addeventatc.hasclass(itx[m],'location')){burl += '&dloca='+encodeURIComponent(itx[m].innerHTML);}
					if(addeventatc.hasclass(itx[m],'_organizer') || addeventatc.hasclass(itx[m],'organizer')){burl += '&dorga='+encodeURIComponent(itx[m].innerHTML);}
					if(addeventatc.hasclass(itx[m],'_organizer_email') || addeventatc.hasclass(itx[m],'organizer_email')){burl += '&dorgaem='+encodeURIComponent(itx[m].innerHTML);}
					if(addeventatc.hasclass(itx[m],'_attendees') || addeventatc.hasclass(itx[m],'attendees')){burl += '&datte='+encodeURIComponent(itx[m].innerHTML);}
					if(addeventatc.hasclass(itx[m],'_all_day_event') || addeventatc.hasclass(itx[m],'all_day_event')){burl += '&dallday='+encodeURIComponent(itx[m].innerHTML);}
					if(addeventatc.hasclass(itx[m],'_date_format') || addeventatc.hasclass(itx[m],'date_format')){burl += '&dateformat='+encodeURIComponent(itx[m].innerHTML);}
					if(addeventatc.hasclass(itx[m],'_alarm_reminder') || addeventatc.hasclass(itx[m],'alarm_reminder')){burl += '&alarm='+encodeURIComponent(itx[m].innerHTML);}
					if(addeventatc.hasclass(itx[m],'_recurring') || addeventatc.hasclass(itx[m],'recurring')){burl += '&drule='+encodeURIComponent(itx[m].innerHTML);}
					if(addeventatc.hasclass(itx[m],'_facebook_event') || addeventatc.hasclass(itx[m],'facebook_event')){burl += '&fbevent='+encodeURIComponent(itx[m].innerHTML);fbevent = true;}
					if(addeventatc.hasclass(itx[m],'_client') || addeventatc.hasclass(itx[m],'client')){burl += '&client='+encodeURIComponent(itx[m].innerHTML);}
					if(addeventatc.hasclass(itx[m],'_calname') || addeventatc.hasclass(itx[m],'calname')){burl += '&calname='+encodeURIComponent(itx[m].innerHTML);}
					if(addeventatc.hasclass(itx[m],'_uid') || addeventatc.hasclass(itx[m],'uid')){burl += '&uid='+encodeURIComponent(itx[m].innerHTML);}
					if(addeventatc.hasclass(itx[m],'_sequence') || addeventatc.hasclass(itx[m],'sequence')){burl += '&seq='+encodeURIComponent(itx[m].innerHTML);}
					if(addeventatc.hasclass(itx[m],'_status') || addeventatc.hasclass(itx[m],'status')){burl += '&status='+encodeURIComponent(itx[m].innerHTML);}
					if(addeventatc.hasclass(itx[m],'_method') || addeventatc.hasclass(itx[m],'method')){burl += '&method='+encodeURIComponent(itx[m].innerHTML);}
					if(addeventatc.hasclass(itx[m],'_transp') || addeventatc.hasclass(itx[m],'transp')){burl += '&transp='+encodeURIComponent(itx[m].innerHTML);}
					
				}

				// Use Google API
				if(obj.getAttribute('data-google-api') == 'true'){burl += '&gapi=true';}
				if(obj.getAttribute('data-outlook-api') == 'true'){burl += '&oapi=true';}

			}

			// Lookup if Facebook variable exists and return only that variable
			if(opts.facebook){
				burl = fbevent;
			}

			// Return
			return burl;

		},
		trycss:function(){
		
			// Object
			var obj = $d('ate_tmp_css');

			// Apply
			if(!obj){

				// Try catch
				try{

					// Variable
					var str = '';

					// CSS
					str = '.addeventatc {visibility:hidden;}';
					str += '.addeventatc .data {display:none!important;}';
					str += '.addeventatc .start, .addeventatc .end, .addeventatc .timezone, .addeventatc .title, .addeventatc .description, .addeventatc .location, .addeventatc .organizer, .addeventatc .organizer_email, .addeventatc .facebook_event, .addeventatc .all_day_event, .addeventatc .date_format, .addeventatc .alarm_reminder, .addeventatc .recurring, .addeventatc .attendees, .addeventatc .client, .addeventatc .calname, .addeventatc .uid, .addeventatc .sequence, .addeventatc .status, .addeventatc .method, .addeventatc .transp {display:none!important;}';
					
					// Css?
					if(css){
						str += '.addeventatc {background-image:url(https://cdn.addevent.com/libs/imgs/icon-calendar-t5.png), url(https://cdn.addevent.com/libs/imgs/icon-calendar-t1.svg), url(https://cdn.addevent.com/libs/imgs/icon-apple-t5.svg), url(https://cdn.addevent.com/libs/imgs/icon-facebook-t5.svg), url(https://cdn.addevent.com/libs/imgs/icon-google-t5.svg), url(https://cdn.addevent.com/libs/imgs/icon-office365-t5.svg), url(https://cdn.addevent.com/libs/imgs/icon-outlook-t5.svg),  url(https://cdn.addevent.com/libs/imgs/icon-outlookcom-t5.svg), url(https://cdn.addevent.com/libs/imgs/icon-yahoo-t5.svg);background-position:-9999px -9999px;background-repeat:no-repeat;}';
					}

					// Create element
					var elm = document.createElement("style");
					elm.type = "text/css";
					elm.id = "ate_tmp_css";

					// Apply to style
					if(elm.styleSheet){
						elm.styleSheet.cssText = str;
					}else{
						elm.appendChild(document.createTextNode(str));
					}

					// Apply to header
					document.getElementsByTagName("head")[0].appendChild(elm);

				}catch(e){}

				// Track JS exposure
				addeventatc.track({
					typ:'jsinit',
					cal:''
				});

			}

		},
		applycss:function(){
			
			// If a previous version already exists, rename the style
			if($d('ate_css') && !$d('ate_css_plv')){
				$d('ate_css').id = $d('ate_css').id.replace(/ate_css/gi, 'ate_css_plv');
			}

			// Object
			var obj = $d('ate_css');

			// Apply
			if(!obj){

				// Variable
				var str = '';

				// CSS
				str += '@import url("https://fonts.googleapis.com/css2?family=Inter&family=Open+Sans:ital,wght@0,400;0,600;1,400&display=swap");';
				str += '.addeventatc 							{display:inline-block;position:relative;z-index:99998;font-family:"Open Sans",Roboto,"Helvetica Neue",Helvetica,Optima,Segoe,"Segoe UI",Candara,Calibri,Arial,sans-serif;color:#000!important;font-weight:600;line-height:100%;background:#fff;font-size:15px;text-decoration:none;border:1px solid transparent;padding:13px 12px 12px 43px;-webkit-border-radius:3px;border-radius:3px;cursor:pointer;-webkit-font-smoothing:antialiased!important;outline-color:rgba(0,78,255,0.5);text-shadow:1px 1px 1px rgba(0,0,0,0.004);-webkit-user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);box-shadow:0 0 0 0.5px rgba(50,50,93,.17), 0 2px 5px 0 rgba(50,50,93,.1), 0 1px 1.5px 0 rgba(0,0,0,.07), 0 1px 2px 0 rgba(0,0,0,.08), 0 0 0 0 transparent!important;background-image:url(https://cdn.addevent.com/libs/imgs/icon-calendar-t5.png), url(https://cdn.addevent.com/libs/imgs/icon-calendar-t1.svg), url(https://cdn.addevent.com/libs/imgs/icon-apple-t5.svg), url(https://cdn.addevent.com/libs/imgs/icon-facebook-t5.svg), url(https://cdn.addevent.com/libs/imgs/icon-google-t5.svg), url(https://cdn.addevent.com/libs/imgs/icon-office365-t5.svg), url(https://cdn.addevent.com/libs/imgs/icon-outlook-t5.svg), url(https://cdn.addevent.com/libs/imgs/icon-outlookcom-t5.svg), url(https://cdn.addevent.com/libs/imgs/icon-yahoo-t5.svg);background-position:-9999px -9999px;background-repeat:no-repeat;}';
				str += '.addeventatc:hover 						{background-color:#fafafa;color:#000;font-size:15px;text-decoration:none;}';
				str += '.addeventatc:active 					{border-width:2px 1px 0px 1px;}';
				str += '.addeventatc-selected 					{background-color:#f9f9f9;}';
				str += '.addeventatc .addeventatc_icon 			{width:18px;height:18px;position:absolute;z-index:1;left:12px;top:10px;background:url(https://cdn.addevent.com/libs/imgs/icon-calendar-t1.svg) no-repeat;background-size:18px 18px;}';
				str += '.addeventatc .start, .addeventatc .end, .addeventatc .timezone, .addeventatc .title, .addeventatc .description, .addeventatc .location, .addeventatc .organizer, .addeventatc .organizer_email, .addeventatc .facebook_event, .addeventatc .all_day_event, .addeventatc .date_format, .addeventatc .alarm_reminder, .addeventatc .recurring, .addeventatc .attendees, .addeventatc .calname, .addeventatc .uid, .addeventatc .sequence, .addeventatc .status, .addeventatc .method, .addeventatc .client, .addeventatc .transp {display:none!important;}';
				str += '.addeventatc br 						{display:none;}';

				// Credits
				if(!addeventatc.getlicense(license)){
					str += '.addeventatc_dropdown 				{width:230px;position:absolute;padding:6px 0px 0px 0px;font-family:"Open Sans",Roboto,"Helvetica Neue",Helvetica,Optima,Segoe,"Segoe UI",Candara,Calibri,Arial,sans-serif;color:#000!important;font-weight:600;line-height:100%;background:#fff;font-size:15px;text-decoration:none;text-align:left;margin-left:-1px;display:none;-moz-border-radius:3px;-webkit-border-radius:3px;-webkit-box-shadow:rgba(0,0,0,0.4) 0px 10px 26px;-moz-box-shadow:rgba(0,0,0,0.4) 0px 10px 26px;box-shadow:rgba(0,0,0,0.4) 0px 10px 26px;transform:scale(.98,.98) translateY(5px);opacity:0.5;z-index:-1;transition:transform .15s ease;-webkit-user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);}';
				}else{
					str += '.addeventatc_dropdown 				{width:230px;position:absolute;padding:6px 0px 6px 0px;font-family:"Open Sans",Roboto,"Helvetica Neue",Helvetica,Optima,Segoe,"Segoe UI",Candara,Calibri,Arial,sans-serif;color:#000!important;font-weight:600;line-height:100%;background:#fff;font-size:15px;text-decoration:none;text-align:left;margin-left:-1px;display:none;-moz-border-radius:3px;-webkit-border-radius:3px;-webkit-box-shadow:rgba(0,0,0,0.4) 0px 10px 26px;-moz-box-shadow:rgba(0,0,0,0.4) 0px 10px 26px;box-shadow:rgba(0,0,0,0.4) 0px 10px 26px;transform:scale(.98,.98) translateY(5px);opacity:0.5;z-index:-1;transition:transform .15s ease;-webkit-user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);}';
				}

				str += '.addeventatc_dropdown.topdown 			{transform:scale(.98,.98) translateY(-5px)!important;}';
				str += '.addeventatc_dropdown span 				{display:block;line-height:100%;background:#fff;text-decoration:none;cursor:pointer;font-size:15px;color:#333;font-weight:600;padding:14px 10px 14px 55px;margin:-2px 0px;}';
				str += '.addeventatc_dropdown span:hover 		{background-color:#f4f4f4;color:#000;text-decoration:none;font-size:15px;}';
				str += '.addeventatc_dropdown em 				{color:#999!important;font-size:12px!important;font-weight:400;}';
				str += '.addeventatc_dropdown .frs a 			{background:#fff;color:#cacaca!important;cursor:pointer;font-size:9px!important;font-style:normal!important;font-weight:400!important;line-height:110%!important;padding-left:10px;position:absolute;right:10px;text-align:right;text-decoration:none;top:5px;z-index:101;}';
				str += '.addeventatc_dropdown .frs a:hover 		{color:#999!important;}';
				str += '.addeventatc_dropdown .ateappleical 	{background:url(https://cdn.addevent.com/libs/imgs/icon-apple-t5.svg) 18px 40% no-repeat;background-size:22px 100%;}';
				str += '.addeventatc_dropdown .ategoogle 		{background:url(https://cdn.addevent.com/libs/imgs/icon-google-t5.svg) 18px 50% no-repeat;background-size:22px 100%;}';
				str += '.addeventatc_dropdown .ateoffice365 	{background:url(https://cdn.addevent.com/libs/imgs/icon-office365-t5.svg) 19px 50% no-repeat;background-size:18px 100%;}';
				str += '.addeventatc_dropdown .ateoutlook 		{background:url(https://cdn.addevent.com/libs/imgs/icon-outlook-t5.svg) 18px 50% no-repeat;background-size:22px 100%;}';
				str += '.addeventatc_dropdown .ateoutlookcom 	{background:url(https://cdn.addevent.com/libs/imgs/icon-outlookcom-t5.svg) 18px 50% no-repeat;background-size:22px 100%;}';
				str += '.addeventatc_dropdown .ateyahoo 		{background:url(https://cdn.addevent.com/libs/imgs/icon-yahoo-t5.svg) 18px 50% no-repeat;background-size:22px 100%;}';
				str += '.addeventatc_dropdown .atefacebook 		{background:url(https://cdn.addevent.com/libs/imgs/icon-facebook-t5.svg) 18px 50% no-repeat;background-size:22px 100%;}';
				str += '.addeventatc_dropdown .copyx 			{height:21px;display:block;position:relative;cursor:default;}';
				str += '.addeventatc_dropdown .brx 				{height:1px;overflow:hidden;background:#e8e8e8;position:absolute;z-index:100;left:10px;right:10px;top:9px;}';
				str += '.addeventatc_dropdown.addeventatc-selected {opacity:1;transform:scale(1,1) translateY(0px);z-index:99999999;}';
				str += '.addeventatc_dropdown.topdown.addeventatc-selected {transform:scale(1,1) translateY(0px)!important;}';
				str += '.addeventatc_dropdown .drop_markup {background-color:#f4f4f4;}';

				// Create element
				var elm = document.createElement("style");
				elm.type = "text/css";
				elm.id = "ate_css";

				// Apply to style
				if(elm.styleSheet){
					elm.styleSheet.cssText = str;
				}else{
					elm.appendChild(document.createTextNode(str));
				}

				// Apply to header
				document.getElementsByTagName("head")[0].appendChild(elm);

				// Remove temporary css
				addeventatc.removeelement($d('ate_tmp_css'));

			}

		},
		helpercss:function(){
		
			// Object
			var obj = $d('ate_helper_css');

			// Apply
			if(!obj){

				// Variable
				var str = '';

				// CSS
				str += '.addeventatc_dropdown .drop_markup {background-color:#f4f4f4;}';
				str += '.addeventatc_dropdown .frs a {margin:0!important;padding:0!important;font-style:normal!important;font-weight:normal!important;line-height:110%!important;background-color:#fff!important;text-decoration:none;font-size:9px!important;color:#cacaca!important;display:inline-block;}';
				str += '.addeventatc_dropdown .frs a:hover {color:#999!important;}';
				str += '.addeventatc .start, .addeventatc .end, .addeventatc .timezone, .addeventatc .title, .addeventatc .description, .addeventatc .location, .addeventatc .organizer, .addeventatc .organizer_email, .addeventatc .facebook_event, .addeventatc .all_day_event, .addeventatc .date_format, .addeventatc .alarm_reminder, .addeventatc .recurring, .addeventatc .attendees, .addeventatc .client, .addeventatc .calname, .addeventatc .uid, .addeventatc .sequence, .addeventatc .status, .addeventatc .method, .addeventatc .transp {display:none!important;}';
				
				// Create element
				var elm = document.createElement("style");
				elm.type = "text/css";
				elm.id = "ate_helper_css";

				// Apply to style
				if(elm.styleSheet){
					elm.styleSheet.cssText = str;
				}else{
					elm.appendChild(document.createTextNode(str));
				}

				// Apply to header
				document.getElementsByTagName("head")[0].appendChild(elm);

			}

		},
		removeelement:function(obj){
		
			// Remove css
			try{return (hdx = obj) ? hdx.parentNode.removeChild(hdx) : false;}catch(e){}
		
		},
		topzindex:function(){

			// Zindex variable
			var ozin = 1;

			// Get items
			var items = document.getElementsByTagName('*');
			
			// Loop
			for(var d=0;d<items.length;d+=1){
				if(addeventatc.hasclass(items[d],'addeventatc') || addeventatc.hasclass(items[d],'addeventstc')){
					
					// Get z-index
					var zin = addeventatc.getstyle(items[d],'z-index');

					// Is zin a number?
					if(!isNaN(parseFloat(zin)) && isFinite(zin)){

						// Int
						zin = parseInt(zin);

						// Higher than previous?
						if(zin>ozin){
							ozin = zin;
						}

					}

				}
			}

			// Return
			return ozin;

		},
		viewport:function(){
		
			// Variables
			var w = 0, h = 0, y = 0, x = 0;
			
			// Get width + height
			if(typeof(window.innerWidth)=='number'){
				w = window.innerWidth;
				h = window.innerHeight;
			}else if(document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)){
				w = document.documentElement.clientWidth;
				h = document.documentElement.clientHeight;
			}else if(document.body && (document.body.clientWidth || document.body.clientHeight)){
				w = document.body.clientWidth;
				h = document.body.clientHeight;
			}
			
			// Get scroll left + top
			if(document.all){
				x = (document.documentElement.scrollLeft) ? document.documentElement.scrollLeft : document.body.scrollLeft;
				y = (document.documentElement.scrollTop) ? document.documentElement.scrollTop : document.body.scrollTop;
			}else{
				x = window.pageXOffset;
				y = window.pageYOffset
			}
			
			// Return
			return {w:w,h:h,x:x,y:y};
			
		},
		elementposition:function(obj){
			
			// Variables
			var x = 0, y = 0;
			
			// Get element position
			if(obj.offsetParent){
				x=obj.offsetLeft;
				y=obj.offsetTop;
				while(obj=obj.offsetParent){
					x+=obj.offsetLeft;
					y+=obj.offsetTop;
				}
			}
			
			// Return
			return {x:x,y:y};
			
		},
		getstyle:function(el,prop){
			
			// Variables
			var x = el;var y;
			
			// Get property
			if(x.currentStyle){
				y = x.currentStyle[prop];
			}else if (window.getComputedStyle){
				y = document.defaultView.getComputedStyle(x,null).getPropertyValue(prop);
			}
			
			// Return
			return y;
			
		},
		getlicense:function(val){
			
			// Variables
			var ref = location.origin, correct = false;

			// Ref backup
			if(typeof location.origin === 'undefined'){ref = location.protocol + '//' + location.host;}
			
			// Any license?
			if(val){

				// Get letters
				var a = val.substring(0,1), z = val.substring(9,10), m = val.substring(17,18);

				// Validate
				if(a=='a' && z=='z' && m=='m'){

					// Set
					correct = true;

				}
				
			}

			// Always allowed on our domains
			if(ref.indexOf('addevent.com')==-1 && val=='aao8iuet5zp9iqw5sm9z' || ref.indexOf('addevent.to')==-1 && val=='aao8iuet5zp9iqw5sm9z' || ref.indexOf('addevent.com')==-1 && val=='aao8iuet5zp9iqw5sm9z'){
				
				// Set
				correct = true;

			}
			
			// Return
			return correct;
			
		},
		refresh:function(){
		
			// Get items
			var items = document.getElementsByTagName('*'), elmarray = [];

			// Loop
			for(var d=0;d<items.length;d+=1){
				if(addeventatc.hasclass(items[d],'addeventatc')){
					
					// Remove classes
					items[d].className = items[d].className.replace(/addeventatc-selected/gi, '');

					// Reset id
					items[d].id = '';

					// Get items in button
					var subs = items[d].getElementsByTagName('*');
					
					// Loop
					for(var m=0;m<subs.length;m+=1){
						if(addeventatc.hasclass(subs[m],'addeventatc_icon') || addeventatc.hasclass(subs[m],'addeventatc_dropdown')){

							// Add to array
							elmarray.push(subs[m]);

						}
					}

				}
			}

			// Loop through elements to delete
			for(var x=0;x<elmarray.length;x+=1){

				// Remove
				addeventatc.removeelement(elmarray[x]);

			}

			// Remove css
			addeventatc.removeelement($d('ate_css'));

			// Reset counter
			dropzcx = 1;

			// Reset expo
			btn_expo = false;

			// Refresh
			addeventatc.generate();
			
		},
		hasclass:function(e,c){

			// Search + return
			return new RegExp('(\\s|^)' + c + '(\\s|$)').test(e.className);
		
		},
		eclick:function(elm){

			// Get element to click
			var bun = document.getElementById(elm);
			
			// Supported?
			if(bun.click){
			    
			    // Invoke
			    bun.click();

			}else if(document.createEvent){

				// Create event
			    var boj = document.createEvent('MouseEvents');

			    // Init
			    boj.initEvent('click', true, true);

			    // Dispatch
			    bun.dispatchEvent(boj);

			}

		},
		track:function(opts){

			// Tracking pixel
			var trpi = new Image();

			// Tracking date
			var d = new Date();

			// Get unix stamp
			var unixstamp = d.getTime();

			// Get location
			var trloc = encodeURIComponent(window.location.origin);

			// Set source
			//trpi.src = 'https://track.addevent.com/atc/?trktyp=' + opts.typ + '&trkcal=' + opts.cal + '&guid=' + addeventatc.getguid() + '&url=' + trloc + '&cache=' + unixstamp;

		},
		getguid:function(){

			// Any cookie value?
			var neq = "addevent_track_cookie=", coov = '';

			// Split
			var ca = document.cookie.split(';');

			// Search cookies
			for(var i=0;i<ca.length;i++){
				var c = ca[i];
				while(c.charAt(0)==' '){c = c.substring(1,c.length);}
				if(c.indexOf(neq)==0){
					coov = c.substring(neq.length,c.length);
				}
			}

			// No GUID in cookies
			if(coov==''){

				// Create GUID
				var UUIDv4 = (addeventatc.s4()+addeventatc.s4()+"-"+addeventatc.s4()+"-4"+addeventatc.s4().substr(0,3)+"-"+addeventatc.s4()+"-"+addeventatc.s4()+addeventatc.s4()+addeventatc.s4()).toLowerCase();

				// Set date
				var cd = new Date();

				// Set time
			    cd.setTime(cd.getTime() + (365*24*60*60*1000));

			    // Set expires
			    var expires = "expires=" + cd.toUTCString();

			    // Create cookie
			    document.cookie = "addevent_track_cookie=" + UUIDv4 + "; " + expires;

			    // Update
			    coov = UUIDv4;

			}

			// Return
			return coov;

		},
		s4:function(){

			// Generate random
			return (((1+Math.random())*0x10000)|0).toString(16).substring(1);

		},
		documentclick:function(e){

			// Get event
			e = e || window.event;
		    e = e.target || e.srcElement;

		    // Clicking an inline SVG element type STRING? Then find the parent node
		    var s = false;
		    try{s = e instanceof SVGElement;if(s){e = e.parentNode;}}catch(e){}

		    // Determine whether to close drop down
		    if(ate_touch_capable){
		    	clearTimeout(reg_timer);
		    	reg_timer = setTimeout(function(){addeventatc.hide(e.className);},200);
		    }else{
		    	addeventatc.hide(e.className);
		    }

		},
		trigger:function(opt,vars){

			// Triggers
			if(opt == 'button_click'){try{reg_button_click(vars);}catch(e){};}
			if(opt == 'button_mouseover'){try{reg_button_mouseover(vars);}catch(e){};}
			if(opt == 'button_mouseout'){try{reg_button_mouseout(vars);}catch(e){};}
			if(opt == 'button_dropdown_show'){try{reg_button_dropdown_show(vars);}catch(e){};}
			if(opt == 'button_dropdown_hide'){try{reg_button_dropdown_hide(vars);}catch(e){};}
			if(opt == 'button_dropdown_click'){try{reg_button_dropdown_click(vars);}catch(e){};}

		},
		register:function(opt,func){

			// Register events
			if(opt == 'button-click'){reg_button_click = func;}
			if(opt == 'button-mouseover'){reg_button_mouseover = func;}
			if(opt == 'button-mouseout'){reg_button_mouseout = func;}
			if(opt == 'button-dropdown-show'){reg_button_dropdown_show = func;}
			if(opt == 'button-dropdown-hide'){reg_button_dropdown_hide = func;}
			if(opt == 'button-dropdown-click'){reg_button_dropdown_click = func;}

		},
		settings:function(c){

			// License
			if(c.license!=undefined){license = c.license;}

			// Custom css
			if(c.css!=undefined){
				if(c.css){
					css = true;
				}else{
					css = false;
					addeventatc.removeelement($d('ate_css'));
				}
			}
			
			// Mouse
			if(c.mouse!=undefined){mouseover = c.mouse;}
			
			// Override if mobile/tablet browser
			if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
				mouseover = false;
			}
			
			// Show / hide
			if(c.outlook!=undefined){if(c.outlook.show!=undefined){drop_outlook = c.outlook.show;}}
			if(c.google!=undefined){if(c.google.show!=undefined){drop_google = c.google.show;}}
			if(c.office365!=undefined){if(c.office365.show!=undefined){drop_office365 = c.office365.show;}}
			if(c.yahoo!=undefined){if(c.yahoo.show!=undefined){drop_yahoo = c.yahoo.show;}}
			if(c.hotmail!=undefined){if(c.hotmail.show!=undefined){drop_outlookcom = c.hotmail.show;}}
			if(c.outlookcom!=undefined){if(c.outlookcom.show!=undefined){drop_outlookcom = c.outlookcom.show;}}
			if(c.ical!=undefined){if(c.ical.show!=undefined){drop_appleical = c.ical.show;}}
			if(c.appleical!=undefined){if(c.appleical.show!=undefined){drop_appleical = c.appleical.show;}}
			if(c.facebook!=undefined){if(c.facebook.show!=undefined){drop_facebook = c.facebook.show;}}
			
			// Labels
			if(c.outlook!=undefined){if(c.outlook.text!=undefined){label_outlook = c.outlook.text;}}
			if(c.google!=undefined){if(c.google.text!=undefined){label_google = c.google.text;}}
			if(c.office365!=undefined){if(c.office365.text!=undefined){label_office365 = c.office365.text;}}
			if(c.yahoo!=undefined){if(c.yahoo.text!=undefined){label_yahoo = c.yahoo.text;}}
			if(c.hotmail!=undefined){if(c.hotmail.text!=undefined){label_outlookcom = c.hotmail.text;}}
			if(c.outlookcom!=undefined){if(c.outlookcom.text!=undefined){label_outlookcom = c.outlookcom.text;}}
			if(c.ical!=undefined){if(c.ical.text!=undefined){label_appleical = c.ical.text;}}
			if(c.appleical!=undefined){if(c.appleical.text!=undefined){label_appleical = c.appleical.text;}}
			if(c.facebook!=undefined){if(c.facebook.text!=undefined){label_fb_event = c.facebook.text;}}

			// Drop down sortorder
			if(c.dropdown!=undefined){if(c.dropdown.order!=undefined){dropdown_order = c.dropdown.order;}}

		},
		keyboard:function(f,opts){

			// Get drop down
			var elm = document.getElementById(opts.id+'-drop');

			// Exits?
			if(elm){

				// Get display property
				var dis = addeventatc.getstyle(elm, 'display');

				// Is drop down visible?
				if(dis == 'block'){

					// Get drop down elements
					var subs = elm.getElementsByTagName('SPAN');

					// Variables
					var fndelm = null, itemscount = 0, activenum = 0;
					
					// Loop to find if any is active
					for(var x=0;x<subs.length;x+=1){

						// Count
						itemscount++;

						// Has active class?
						if(addeventatc.hasclass(subs[x],'drop_markup')){
							
							// Set active object
							fndelm = subs[x];

							// Set active number
							activenum = itemscount;

						}

					}

					// If none found, set default
					if(fndelm === null){

						// Set active number
						activenum = 1;

					}else{

						// Toogle next element when navigating with keyboard
						if(opts.key == 'down'){
							if(activenum>=itemscount){
								activenum = 1;
							}else{
								activenum++;
							}
						}else{
							if(activenum==1){
								activenum = itemscount;
							}else{
								activenum--;
							}
						}

					}

					// Reset
					itemscount = 0;

					// Loop list again to set active and clear previous marker classes
					for(var x=0;x<subs.length;x+=1){

						// Add count
						itemscount++;

						// Match?
						if(itemscount == activenum){

							// Add class
							subs[x].className += ' drop_markup';
							subs[x].tabIndex = '0';

							// Get element to focus
							var film = subs[x];

							// Focus
							film.focus();

						}else{

							// Find marker class
							var reg = new RegExp('(\\s|^)drop_markup(\\s|$)');

							// Replace
							subs[x].className = subs[x].className.replace(reg, ' ');

							// Remove whitespaces
							subs[x].className = subs[x].className.replace(/\s+$/, '');

							// Set zIndex
							subs[x].tabIndex = '-1';

						}

					}

				}
			
			}

		},
		keyboardclick:function(f,opts){

			// Get drop down
			var elm = document.getElementById(opts.id+'-drop');

			// Exits?
			if(elm){

				// Get drop down elements
				var subs = elm.getElementsByTagName('SPAN');

				// Variables
				var fndelm = null;
				
				// Loop to find if any is active
				for(var x=0;x<subs.length;x+=1){

					// Has active class?
					if(addeventatc.hasclass(subs[x],'drop_markup')){
						
						// Set active object
						fndelm = subs[x];

					}

				}

				// Any active element?
				if(fndelm !== null){

					// Trigger click
					fndelm.click();

					// Loop list again, remove marker class
					for(var x=0;x<subs.length;x+=1){

						// Find marker class
						var reg = new RegExp('(\\s|^)drop_markup(\\s|$)');

						// Replace
						subs[x].className = subs[x].className.replace(reg, ' ');

						// Remove whitespaces
						subs[x].className = subs[x].className.replace(/\s+$/, '');

					}

				}

			}

		},
		usewebcal:function(){

			// Use webcal
			var uwc = false, extbro = false;

			// Get user agent
			var useragent = window.navigator.userAgent.toLowerCase();

			// Chrome, Firefox, Dolphin browsers + Google app
			if(navigator.userAgent.match(/CriOS|FxiOS|OPiOS|EdgiOS|mercury|gsa/i)){
				extbro = true;
			}

			// iOS
			var ios = /iphone|ipod|ipad/.test(useragent);

			// Facebook messenger
    		if((useragent.indexOf("fban") > -1) || (useragent.indexOf("fbav") > -1) && ios){

    			// Set
    			extbro = true;

    		}

			// UI webview/embedded browser
			var is_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);

			// iOS?
			if(ios && is_uiwebview || ios && extbro){

				// Any "subscription mode" cookie value?
				var neq = "atc_sub_mode=", coov = false;

				// Split
				var ca = document.cookie.split(';');

				// Search cookies
				for(var i=0;i<ca.length;i++){
					var c = ca[i];
					while(c.charAt(0)==' '){c = c.substring(1,c.length);}
					if(c.indexOf(neq)==0){
						coov = c.substring(neq.length,c.length);
					}
				}

				// Alert
				if(!coov){
    				alert('If the event fails to load please \n"Open the page in Safari".');
    			}

				// Set
				uwc = true;

				// Set cookie so alert only appears once
				var cd = new Date();
				cd.setTime(cd.getTime() + (365*24*60*60*1000));
				var expires = "expires="+ cd.toUTCString();
				document.cookie = "atc_sub_mode=true;" + expires + ";path=/;SameSite=Lax";

			}

			// Return
			return uwc;

		},
		agent:function(){
			
			// Get user agent
			var userAgent = navigator.userAgent || navigator.vendor || window.opera;

			// Windows Phone must come first because its UA also contains "Android"
			if (/windows phone/i.test(userAgent)){
			    return "windows_phone";
			}

			if (/android/i.test(userAgent)){
			    return "android";
			}

			// iOS detection from: http://stackoverflow.com/a/9039885/177710
			if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream){
			    return "ios";
			}

			// Return
			return "unknown";
			
		},
		isloaded:function(){

			if(atc_loaded){
				return true;
			}else{
				return false;
			}

		},
		notloadedcnt:function(){

			// Get items
			var items = document.getElementsByClassName('addeventatc');
			var loadcnt = 0;
			
			// Loop
			for(var d=0;d<items.length;d+=1){
			
				// Get
				if(items[d].getAttribute('data-loaded') == 'true'){
					loadcnt++;
				}

			}

			// More to load?
			if(items.length > loadcnt){
				
				// Refresh
				addeventatc.refresh();

			}

		}
	};
}();

(function(funcName, baseObj){
    "use strict";
    // The public function name defaults to window.docReady
    // but you can modify the last line of this function to pass in a different object or method name
    // if you want to put them in a different namespace and those will be used instead of 
    // window.docReady(...)
    funcName = funcName || "docReady";
    baseObj = baseObj || window;
    var readyList = [];
    var readyFired = false;
    var readyEventHandlersInstalled = false;
    
    // call this when the document is ready
    // this function protects itself against being called more than once
    function ready() {
        if (!readyFired) {
            // this must be set to true before we start calling callbacks
            readyFired = true;
            for (var i = 0; i < readyList.length; i++) {
                // if a callback here happens to add new ready handlers,
                // the docReady() function will see that it already fired
                // and will schedule the callback to run right after
                // this event loop finishes so all handlers will still execute
                // in order and no new ones will be added to the readyList
                // while we are processing the list
                readyList[i].fn.call(window, readyList[i].ctx);
            }
            // allow any closures held by these functions to free
            readyList = [];
        }
    }
    
    function readyStateChange() {
        if ( document.readyState === "complete" ) {
            ready();
        }
    }
    
    // This is the one public interface
    // docReady(fn, context);
    // the context argument is optional - if present, it will be passed
    // as an argument to the callback
    baseObj[funcName] = function(callback, context) {
        if (typeof callback !== "function") {
            throw new TypeError("callback for docReady(fn) must be a function");
        }
        // if ready has already fired, then just schedule the callback
        // to fire asynchronously, but right away
        if (readyFired) {
            setTimeout(function() {callback(context);}, 1);
            return;
        } else {
            // add the function and context to the list
            readyList.push({fn: callback, ctx: context});
        }
        // if document already ready to go, schedule the ready function to run
        // IE only safe when readyState is "complete", others safe when readyState is "interactive"
        if (document.readyState === "complete" || (!document.attachEvent && document.readyState === "interactive")) {
            setTimeout(ready, 1);
        } else if (!readyEventHandlersInstalled) {
            // otherwise if we don't have event handlers installed, install them
            if (document.addEventListener) {
                // first choice is DOMContentLoaded event
                document.addEventListener("DOMContentLoaded", ready, false);
                // backup is window load event
                window.addEventListener("load", ready, false);
            } else {
                // must be IE
                document.attachEvent("onreadystatechange", readyStateChange);
                window.attachEvent("onload", ready);
            }
            readyEventHandlersInstalled = true;
        }
    }
})("addeventReady", window);

// Detect touch
var ate_touch_capable = 'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch || navigator.maxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0;

/* Add to "DOM ready" + onload event */
if(window.addEventListener){
	document.addEventListener("click", addeventatc.documentclick, false);
	if(ate_touch_capable){document.addEventListener("touchend", addeventatc.documentclick, false);}
}else if(window.attachEvent){
	document.attachEvent("onclick", addeventatc.documentclick);
	if(ate_touch_capable){document.attachEvent("ontouchend", addeventatc.documentclick);}
}else{
	document.onclick = function(){addeventatc.documentclick(event);};
}

// Load
addeventReady(function(){
    
    // Initialize
    addeventatc.initialize();
    
});

// Fallback variables
var flbckcnt = 0;

// Fallback loading (request for 4,5 seconds)
var flbckint = setInterval(function(){

	// Add
	flbckcnt++;

	// If more than 15 attempts, then stop
	if(flbckcnt >= 15 || addeventatc.isloaded()){

		// Stop interval
		clearInterval(flbckint);

	}else{

		// Initialize
		addeventatc.initialize();

	}

}, 300);

// Fallback variables
var nlbckcnt = 0;

// Pickup any async loaded buttons (request for 4,5 seconds)
var nlbckint = setInterval(function(){

	// Add
	nlbckcnt++;

	// If more than 15 attempts, then stop
	if(nlbckcnt >= 15){

		// Stop interval
		clearInterval(nlbckint);

	}else{

		// Initialize
		addeventatc.notloadedcnt();

	}

}, 300);