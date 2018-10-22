/* @Class: ACCORDI0N
 *
 * @Summary Simple accordion. Uses the following JS template 
 *								 placed in the document HEAD
 *
 *			<script id="accordion-template" type="text/template">
 *				<dt>{{ICON}}{{HEADER}}</dt>
 *  			<dd style="display: none;">{{CONTENT}}</dd>
 *  		</script> 
 *          
 *
*/
var ACCORDION = function () {

  /**
  *  @private pri()
  *  @description 
  */
  var pri = function () {

  }; // pri()


  /**
  *  @public pub()
  *  @description
  */
  this.pub = function(name) {

  }; // pub()
  
  /**
  *  @private loadAccordion()
  *  @description:
  *  @params: aId {string} ID of the <dl> element
	*						spd {number} Speed in microseconds of the transition
  */
  var loadAccordion = function (aId,spd) {

  	for (var i=0; i < accordionData.items.length; i++) {
  	
  		var template = $("#accordion-template").html();
  		var html = '', paraContent = '';
  	
			html = template.replace('{{icon}}', '<span class="accIcon">' + accordionData.items[i].icon + '</span>');
			html = html.replace('{{header}}', '<span class="accHdr">' +accordionData.items[i].header + '</span>');
		
			for (var j=0; j < accordionData.items[i].paras.length; j++) {
				paraContent += "<p>" + accordionData.items[i].paras[j] + "</p>";
			}	
		
			html = html.replace('{{content}}', paraContent);

			$("#" + aId).append(html);
			
		}
		
		accordion('simA',spd);

  }; // loadAccordion()
  
  
  /**
	*  @private accordion
	*  @description: 
	*  @params: aId {string} ID of the <dl> element
	*						spd {number} Speed in microseconds of the transition
	*
	*/
	var accordion = function(aId,spd) {
	
		var elID = "#" + aId;
		$(elID + " dt").on( "click", function() {
		 $(this).next('dd').slideToggle(spd).siblings('dd').slideUp(spd);
		});
		
	}; // accordion()
  

  /**
  *  @public init()
  *  @description
  */
  this.init = function () {

			loadAccordion('simA', 300);

  }; // init()
    

}; // ACCORDION()
 
var initaccordion = new ACCORDION(); 

$(document).ready(function(){

  initaccordion.init(); 

});







