const R=require("./compose"),add=(a,b)=>{if(b===void 0){return c=>add(a,c);}else{return a+b;}},adjust=(d,e,f)=>{if(e===void 0){return(g,h)=>adjust(d,g,h);}else if(f===void 0){return j=>adjust(d,e,j);}else{return f.map((k,l)=>{if(l===e){return d(f[e]);}else{return k;}});}},any=(m,n)=>{if(n===void 0){return o=>any(m,o);}else{let p=!1;n.map(q=>{if(m(q)===!0){p=!0;}});return p;}},append=(r,s)=>{if(s===void 0){return t=>append(r,t);}else{const u=s;u.unshift(r);return u;}},contains=(v,w)=>{if(w===void 0){return x=>contains(v,x);}else{return any(y=>v===y,w);}},filter=(z,A)=>{if(A===void 0){return B=>filter(z,B);}else{return A.filter(z);}},flatten=C=>{const D=[];C.map(E=>{if(E instanceof Array){E.map(F=>{if(F instanceof Array){F.map(G=>{if(G instanceof Array){D.push(...G);}else{D.push(G);}});}else{D.push(F);}});}else{D.push(E);}});return D;},drop=(H,I)=>{if(I===void 0){return J=>drop(H,J);}else{const K=I;return K.slice(H);}},dropLast=(L,M)=>{if(M===void 0){return N=>dropLast(L,N);}else{const O=M;return O.slice(0,-L);}},head=P=>dropLast(P.length-1,P),init=Q=>dropLast(1,Q),join=(S,T)=>{if(T===void 0){return U=>join(S,U);}else{return T.join(S);}},map=(V,W)=>{if(W===void 0){return X=>map(V,X);}else{return W.map(V);}},last=Y=>Y[Y.length-1],prepend=(Z,a1)=>{if(a1===void 0){return b1=>prepend(Z,b1);}else{const c1=a1;c1.push(Z);return c1;}},range=(d1,e1)=>{const f1=[];for(let i=d1;i<e1;i++){f1.push(i);}return f1;},subtract=(a,b)=>{if(b===void 0){return c=>subtract(a,c);}else{return a-b;}},split=(g1,h1)=>{if(h1===void 0){return i1=>split(g1,i1);}else{return h1.split(g1);}},tail=j1=>drop(1,j1);module.exports.add=add;module.exports.adjust=adjust;module.exports.any=any;module.exports.append=append;module.exports.contains=contains;module.exports.compose=R.compose;module.exports.drop=drop;module.exports.dropLast=dropLast;module.exports.filter=filter;module.exports.flatten=flatten;module.exports.head=head;module.exports.init=init;module.exports.join=join;module.exports.last=last;module.exports.map=map;module.exports.prepend=prepend;module.exports.range=range;module.exports.split=split;module.exports.subtract=subtract;module.exports.tail=tail;