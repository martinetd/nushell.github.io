import{_ as n,p as o,q as r,Q as a,t as e,v as s,a1 as d}from"./framework-344bb0e4.js";const i={},c={id:"frontmatter-title-for-dataframe",tabindex:"-1"},p=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),l={class:"command-title"},h=d(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr as-date </code></p><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><p>Format example: &quot;%Y-%m-%d&quot; =&gt; 2021-12-31 &quot;%d-%m-%Y&quot; =&gt; 31-12-2021 &quot;%Y%m%d&quot; =&gt; 2021319 (2021-03-19)</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Converts string to date</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&quot;2021-12-30&quot;</span> <span class="token string">&quot;2021-12-31&quot;</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df <span class="token operator">|</span> dfr as-datetime <span class="token string">&quot;%Y-%m-%d&quot;</span>
</code></pre></div>`,7);function u(t,f){return o(),r("div",null,[a("h1",c,[p,e(),a("code",null,s(t.$frontmatter.title),1),e(" for dataframe")]),a("div",l,s(t.$frontmatter.dataframe),1),h])}const _=n(i,[["render",u],["__file","dfr_as-date.html.vue"]]);export{_ as default};
