var x=Object.defineProperty;var i=(e,o)=>x(e,"name",{value:o,configurable:!0});import{Project as d,ts as s}from"https://esm.sh/ts-morph@^14.0.0";function g(e){return e.__replacePatterns}i(g,"getReplacePatterns");function S(e,o){const f=new d({useInMemoryFileSystem:!0,compilerOptions:{strict:!0,target:s.ScriptTarget.ESNext,module:s.ModuleKind.ESNext,moduleResolution:s.ModuleResolutionKind.NodeNext,forceConsistentCasingInFileNames:!0,allowSyntheticDefaultImports:!0,esModuleInterop:!0,jsx:s.JsxEmit.Preserve}}),u=typeof e=="string"?{"file.tsx":e}:e,n={};for(const t in u)n[t]=f.createSourceFile(t,u[t]);const c={};for(const t in n){const r=n[t];for(const a of o)a(r);const p=g(r)||{};r.formatText();let l=r.getText();for(const[a,m]of Object.entries(p))l=l.replaceAll(a,m);c[t]=l}return typeof e=="string"?Object.values(c)[0]:c}i(S,"applyTransforms");export{S as default};
