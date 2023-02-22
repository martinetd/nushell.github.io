import{_ as n,p as o,q as r,Q as a,t as e,v as s,a1 as p}from"./framework-344bb0e4.js";const c={},d={id:"frontmatter-title-for-dataframe",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),l={class:"command-title"},u=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr to-parquet </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Saves dataframe to parquet file</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df <span class="token operator">|</span> dfr to-parquet test.parquet
</code></pre></div>`,5);function f(t,h){return o(),r("div",null,[a("h1",d,[i,e(),a("code",null,s(t.$frontmatter.title),1),e(" for dataframe")]),a("div",l,s(t.$frontmatter.dataframe),1),u])}const _=n(c,[["render",f],["__file","dfr_to-parquet.html.vue"]]);export{_ as default};
