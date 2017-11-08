// Licensed to Cloudera, Inc. under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  Cloudera, Inc. licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var solrQueryParser=function(){function t(){this.yy={}}var e=function(t,e,i,n){for(i=i||{},n=t.length;n--;i[t[n]]=e);return i},i=[1,6],n=[1,10],r=[1,11],s=[1,9],o=[1,16],l=[1,17],a=[1,18],h=[1,19],c=[1,20],u=[2,5,10,19,23,24,25,26],y=[2,4],g=[2,5,10,23,24,25,26],p=[2,6],f=[2,26],_=[1,31],d=[1,32],m=[5,10,19,23,24,25,26],x=[2,9],k=[9,13,14,19],b=[2,11],v=[2,21],E=[1,60],S=[1,62],O={trace:function(){},yy:{},symbols_:{error:2,SolrQueryAutocomplete:3,SolrQuery:4,EOF:5,SolrQuery_EDIT:6,AnyCursor:7,NonParenthesizedSolrQuery:8,"(":9,")":10,NonParenthesizedSolrQuery_EDIT:11,RightParenthesisOrError:12,NUMBER:13,TERM:14,KeywordMatch:15,BooleanOperator:16,PARTIAL_CURSOR:17,KeywordMatch_EDIT:18,CURSOR:19,":":20,QuotedValue:21,QuotedValue_EDIT:22,AND:23,OR:24,"&&":25,"||":26,SINGLE_QUOTE:27,VALUE:28,DOUBLE_QUOTE:29,PARTIAL_VALUE:30,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",9:"(",10:")",13:"NUMBER",14:"TERM",17:"PARTIAL_CURSOR",19:"CURSOR",20:":",23:"AND",24:"OR",25:"&&",26:"||",27:"SINGLE_QUOTE",28:"VALUE",29:"DOUBLE_QUOTE",30:"PARTIAL_VALUE"},productions_:[0,[3,2],[3,2],[3,2],[4,1],[4,3],[6,1],[6,3],[8,1],[8,1],[8,1],[8,3],[11,2],[11,1],[11,2],[11,3],[11,2],[11,3],[11,3],[11,3],[11,3],[15,3],[15,3],[18,3],[18,4],[18,3],[7,1],[7,1],[16,1],[16,1],[16,1],[16,1],[21,3],[21,3],[22,2],[22,2],[12,1],[12,1]],performAction:function(t,e,i,n,r,s,o){var l=s.length-1;switch(r){case 1:return{};case 2:return s[l-1];case 3:return{suggestFields:{}};case 7:this.$=s[l-1];break;case 12:this.$={suggestFields:{startsWith:s[l-1]},suggestValues:{field:s[l-1],prependColon:!0},suggestKeywords:[":"]};break;case 14:case 15:this.$={suggestKeywords:["AND","OR","&&","||"]};break;case 16:case 17:case 18:this.$={suggestFields:{}};break;case 19:case 34:case 35:this.$=s[l];break;case 20:this.$=s[l-2];break;case 23:this.$={suggestValues:{field:s[l-2]}};break;case 24:this.$={suggestValues:{field:s[l-3],startsWith:s[l-1]}};break;case 25:this.$={suggestValues:{field:s[l-2],startsWith:s[l]}}}},table:[{3:1,4:2,6:3,7:4,8:5,9:i,11:7,13:n,14:r,15:12,17:s,18:13,19:[1,8]},{1:[3]},{5:[1,14],16:15,19:o,23:l,24:a,25:h,26:c},{5:[1,21],16:22,23:l,24:a,25:h,26:c},{5:[1,23]},e(u,y),{4:26,6:28,8:24,9:i,11:25,13:n,14:r,15:12,18:13,19:[1,27]},e(g,p),{4:29,5:f,8:5,9:_,13:n,14:d,15:12,16:30,23:l,24:a,25:h,26:c},e(g,[2,27]),e(u,[2,8]),e(m,x,{17:[1,33],20:[1,34]}),e(u,[2,10]),e(g,[2,13]),{1:[2,1]},{4:35,6:37,8:5,9:i,11:7,13:n,14:r,15:12,18:13,19:[1,36]},e(g,[2,14],{8:5,15:12,4:38,9:_,13:n,14:d}),e(k,[2,28]),e(k,[2,29]),e(k,[2,30]),e(k,[2,31]),{1:[2,2]},{4:39,8:5,9:_,13:n,14:d,15:12},{1:[2,3]},e([19,23,24,25,26],y,{10:[1,40]}),e([23,24,25,26],p,{12:41,2:[1,43],10:[1,42]}),{16:15,19:o,23:l,24:a,25:h,26:c},{4:29,8:5,9:_,13:n,14:d,15:12,16:30,23:l,24:a,25:h,26:c},{16:22,23:l,24:a,25:h,26:c},e(g,[2,16],{16:44}),{4:45,8:5,9:_,13:n,14:d,15:12},{4:46,8:24,9:_,13:n,14:d,15:12},e(g,x,{20:[1,47]}),e(g,[2,12]),{7:50,14:[1,48],17:s,19:[1,54],21:49,22:51,27:[1,52],29:[1,53]},e([5,10,23,24,25,26],b,{16:15,19:o}),e(g,[2,17],{8:5,15:12,4:29,16:30,9:_,13:n,14:d}),e(g,[2,19],{16:22}),e(g,[2,15],{16:44}),e(g,[2,20],{16:44}),e(u,[2,5]),e(g,[2,7]),e(g,[2,36]),e(g,[2,37]),{4:55,8:5,9:_,13:n,14:d,15:12},e(g,[2,18],{16:44}),{16:44,23:l,24:a,25:h,26:c},{14:[1,56],21:49,27:[1,57],29:[1,58]},e(m,v,{17:[1,59]}),e(u,[2,22]),e(g,[2,23]),e(g,[2,25]),{28:E,30:[1,61]},{28:S,30:[1,63]},e(g,f),e(g,b,{16:44}),e(g,v),{28:E},{28:S},e(g,[2,24]),{27:[1,64]},e(g,[2,34]),{29:[1,65]},e(g,[2,35]),e(u,[2,32]),e(u,[2,33])],defaultActions:{14:[2,1],21:[2,2],23:[2,3]},parseError:function(t,e){if(!e.recoverable){var i=new Error(t);throw i.hash=e,i}this.trace(t)},parse:function(t){function e(t){for(var e=n.length-1,i=0;;){if(u.toString()in o[t])return i;if(0===t||e<2)return!1;t=n[e-=2],++i}}var i=this,n=[0],r=[null],s=[],o=this.table,l="",a=0,h=0,c=0,u=2,y=s.slice.call(arguments,1),g=Object.create(this.lexer),p={yy:{}};for(var f in this.yy)Object.prototype.hasOwnProperty.call(this.yy,f)&&(p.yy[f]=this.yy[f]);g.setInput(t,p.yy),p.yy.lexer=g,p.yy.parser=this,void 0===g.yylloc&&(g.yylloc={});var _=g.yylloc;s.push(_);var d=g.options&&g.options.ranges;"function"==typeof p.yy.parseError?this.parseError=p.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var m,x,k,b,v,E,S,O,A,I=function(){var t;return"number"!=typeof(t=g.lex()||1)&&(t=i.symbols_[t]||t),t},P={};;){if(k=n[n.length-1],this.defaultActions[k]?b=this.defaultActions[k]:(null!==m&&void 0!==m||(m=I()),b=o[k]&&o[k][m]),void 0===b||!b.length||!b[0]){var w,Q="";if(c)1!==x&&(w=e(k));else{w=e(k),A=[];for(E in o[k])this.terminals_[E]&&E>u&&A.push("'"+this.terminals_[E]+"'");Q=g.showPosition?"Parse error on line "+(a+1)+":\n"+g.showPosition()+"\nExpecting "+A.join(", ")+", got '"+(this.terminals_[m]||m)+"'":"Parse error on line "+(a+1)+": Unexpected "+(1==m?"end of input":"'"+(this.terminals_[m]||m)+"'"),this.parseError(Q,{text:g.match,token:this.terminals_[m]||m,line:g.yylineno,loc:g.yylloc,ruleId:n.slice(n.length-2,n.length).join("_"),expected:A,recoverable:!1!==w})}if(3==c){if(1===m||1===x)throw new Error(Q||"Parsing halted while starting to recover from another error.");h=g.yyleng,l=g.yytext,a=g.yylineno,_=g.yylloc,m=I()}if(!1===w)throw new Error(Q||"Parsing halted. No suitable error recovery rule available.");!function(t){n.length=n.length-2*t,r.length=r.length-t,s.length=s.length-t}(w),x=m==u?null:m,m=u,k=n[n.length-1],b=o[k]&&o[k][u],c=3}if(b[0]instanceof Array&&b.length>1)throw new Error("Parse Error: multiple actions possible at state: "+k+", token: "+m);switch(b[0]){case 1:n.push(m),r.push(g.yytext),s.push(g.yylloc),n.push(b[1]),m=null,x?(m=x,x=null):(h=g.yyleng,l=g.yytext,a=g.yylineno,_=g.yylloc,c>0&&c--);break;case 2:if(S=this.productions_[b[1]][1],P.$=r[r.length-S],P._$={first_line:s[s.length-(S||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(S||1)].first_column,last_column:s[s.length-1].last_column},d&&(P._$.range=[s[s.length-(S||1)].range[0],s[s.length-1].range[1]]),void 0!==(v=this.performAction.apply(P,[l,h,a,p.yy,b[1],r,s].concat(y))))return v;S&&(n=n.slice(0,-1*S*2),r=r.slice(0,-1*S),s=s.slice(0,-1*S)),n.push(this.productions_[b[1]][0]),r.push(P.$),s.push(P._$),O=o[n[n.length-2]][n[n.length-1]],n.push(O);break;case 3:return!0}}return!0}};O.yy.parseError=function(){return!1},O.addFieldLocation=function(t,e){O.yy.locations.push({type:"field",name:e,location:A(t)})},O.identifyPartials=function(t,e){var i=t.match(/[^()-*+/,\s]*$/),n=e.match(/^[^()-*+/,\s]*/);return{left:i?i[0].length:0,right:n?n[0].length:0}},O.handleQuotedValueWithCursor=function(t,e,i,n){if(-1!==e.indexOf("†")||-1!==e.indexOf("‡")){O.yy.partialCursor=-1!==e.indexOf("‡");var r=O.yy.partialCursor?e.indexOf("‡"):e.indexOf("†");O.yy.cursorFound={first_line:i.first_line,last_line:i.last_line,first_column:i.first_column+r,last_column:i.first_column+r+1};var s=e.substring(r+1),o=(t.upcomingInput().match(new RegExp(n,"g"))||[]).length;return o>0&&!0&o?(O.yy.missingEndQuote=!1,t.input()):(O.yy.missingEndQuote=!0,t.unput(s)),t.popState(),!0}return!1};var A=function(t){var e={first_line:t.first_line,last_line:t.last_line,first_column:t.first_column+1,last_column:t.last_column+1};if(O.yy.cursorFound&&O.yy.cursorFound.first_line===e.first_line&&O.yy.cursorFound.last_column<=e.first_column){var i=O.yy.partialLengths.left+O.yy.partialLengths.right;i-=O.yy.partialCursor?1:3,e.first_column=e.first_column+i,e.last_column=e.last_column+i}return e};O.autocompleteSolrQuery=function(t,e,i){O.yy.cursorFound=!1,O.yy.locations=[],t=t.replace(/\r\n|\n\r/gm,"\n"),e=e.replace(/\r\n|\n\r/gm,"\n"),O.yy.partialLengths=O.identifyPartials(t,e),O.yy.partialCursor=O.yy.partialLengths.left>0;var n=O.yy.partialCursor?"‡":"†";O.yy.partialCursor&&(O.yy.partialLengths.left=0),O.yy.partialLengths.right>0&&(e=e.substring(O.yy.partialLengths.right));var r;try{r=O.parse(t+n+e)}catch(a){if(!a||-1===a.toString().indexOf("Parsing halted while starting to recover from another error"))return i&&(console.log(t+n+e),console.log(a),console.error(a.stack)),{locations:O.yy.locations};for(var s=(t.match(/\(/g)||[]).length,o=(t.match(/\)/g)||[]).length,l="";o<s;)l+=")",o++;try{r=O.parse(t+n+l)}catch(t){return{locations:O.yy.locations}}}return r.locations=O.yy.locations,r};var I={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,i=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var n=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===n.length?this.yylloc.first_column:0)+n[n.length-i.length].length-i[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[r[0],r[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var i,n,r;if(this.options.backtrack_lexer&&(r={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(r.yylloc.range=this.yylloc.range.slice(0))),(n=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=n.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:n?n[n.length-1].length-n[n.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],i=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack){for(var s in r)this[s]=r[s];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var t,e,i,n;this._more||(this.yytext="",this.match="");for(var r=this._currentRules(),s=0;s<r.length;s++)if((i=this._input.match(this.rules[r[s]]))&&(!e||i[0].length>e[0].length)){if(e=i,n=s,this.options.backtrack_lexer){if(!1!==(t=this.test_match(i,r[s])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,r[n]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var t=this.next();return t||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0,flex:!0},performAction:function(t,e,i,n){switch(i){case 0:case 1:case 2:break;case 3:return O.yy.cursorFound=e.yylloc,19;case 4:return O.yy.cursorFound=e.yylloc,17;case 5:case 6:return 23;case 7:case 8:return 24;case 9:case 10:return"NOT";case 11:return"+";case 12:return"-";case 13:return 20;case 14:return"*";case 15:return 9;case 16:return 10;case 17:return 13;case 18:return this.begin("squareBracketRange"),"[";case 19:return O.handleQuotedValueWithCursor(this,e.yytext,e.yylloc,"]")?30:28;case 20:return this.popState(),"]";case 21:return this.begin("curlyBracketRange"),"{";case 22:return O.handleQuotedValueWithCursor(this,e.yytext,e.yylloc,"}")?30:28;case 23:return this.popState(),"}";case 24:return this.begin("singleQuotedValue"),27;case 25:return O.handleQuotedValueWithCursor(this,e.yytext,e.yylloc,"'")?(e.yytext=e.yytext.replace(/[\u2020\u2021].*/,""),30):28;case 26:return this.popState(),27;case 27:return this.begin("doubleQuotedValue"),29;case 28:return O.handleQuotedValueWithCursor(this,e.yytext,e.yylloc,'"')?(e.yytext=e.yytext.replace(/[\u2020\u2021].*/,""),30):28;case 29:return this.popState(),29;case 30:return 14;case 31:return 5;case 32:console.log(e.yytext)}},rules:[/^(?:\s)/i,/^(?:--.*)/i,/^(?:[\/][*][^*]*[*]+([^\/*][^*]*[*]+)*[\/])/i,/^(?:\u2020)/i,/^(?:\u2021)/i,/^(?:AND)/i,/^(?:&&)/i,/^(?:OR)/i,/^(?:\|\|)/i,/^(?:NOT)/i,/^(?:!)/i,/^(?:\+)/i,/^(?:-)/i,/^(?::)/i,/^(?:\*)/i,/^(?:\()/i,/^(?:\))/i,/^(?:[0-9]+(?:[,.][0-9]+)?)/i,/^(?:\[)/i,/^(?:(?:\\[\]]|[^\]])+)/i,/^(?:\])/i,/^(?:\{)/i,/^(?:(?:\\[\}]|[^\}])+)/i,/^(?:\})/i,/^(?:')/i,/^(?:(?:\\[']|[^'])+)/i,/^(?:')/i,/^(?:")/i,/^(?:(?:\\["]|[^"])+)/i,/^(?:")/i,/^(?:[^\s\u3000!():"'^+\-!\[\]{}~*?\/\u2020\u2021]+)/i,/^(?:$)/i,/^(?:.)/i],conditions:{squareBracketRange:{rules:[19],inclusive:!1},curlyBracketRange:{rules:[22,23],inclusive:!1},doubleQuotedValue:{rules:[28,29],inclusive:!1},singleQuotedValue:{rules:[20,25,26],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,21,24,27,30,31,32],inclusive:!0}}};return O.lexer=I,t.prototype=O,O.Parser=t,new t}();"undefined"!=typeof require&&"undefined"!=typeof exports&&(exports.parser=solrQueryParser,exports.Parser=solrQueryParser.Parser,exports.parse=function(){return solrQueryParser.parse.apply(solrQueryParser,arguments)},exports.main=function(t){t[1]||(console.log("Usage: "+t[0]+" FILE"),process.exit(1));var e=require("fs").readFileSync(require("path").normalize(t[1]),"utf8");return exports.parser.parse(e)},"undefined"!=typeof module&&require.main===module&&exports.main(process.argv.slice(1)));