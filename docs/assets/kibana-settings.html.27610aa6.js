import{_ as n,r as s,o,c as i,a as e,b as c,F as r,d as a,e as l}from"./app.856c131d.js";const d={},p=e("h1",{id:"customizing-global-kibana-settings",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#customizing-global-kibana-settings","aria-hidden":"true"},"#"),a(" Customizing global Kibana settings")],-1),m=e("p",null,"The following customization is a recommendation only, to improve your user experience of the sample dashboards.",-1),u=e("h2",{id:"avoid-incomplete-lists-of-terms-in-controls-dropdowns",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#avoid-incomplete-lists-of-terms-in-controls-dropdowns","aria-hidden":"true"},"#"),a(" Avoid incomplete lists of terms in Controls dropdowns")],-1),h=e("p",null,[a("With default Kibana settings, depending on the number of documents you have indexed, the list of terms available in a Kibana Controls dropdown might be incomplete. A dashboard might have charts containing term values "),e("em",null,"that are not available in a Controls dropdown for that field!")],-1),b=a("There are "),g={href:"https://discuss.elastic.co/search?q=terms%20list%20incomplete%20%23elastic-stack%3Akibana",target:"_blank",rel:"noopener noreferrer"},f=a("many topics in the Elastic Kibana discussion forum"),_=a(" about this issue."),k=l(`<p>The recommended &quot;fix&quot; (sic, deliberately in quotes): in <code>$KIBANA_HOME/config/kibana.yml</code>, set high values for <code>autocompleteTimeout</code> and <code>autocompleteTerminateAfter</code>. For example:</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">kibana.autocompleteTimeout</span><span class="token punctuation">:</span> <span class="token number">5000</span>
<span class="token key atrule">kibana.autocompleteTerminateAfter</span><span class="token punctuation">:</span> <span class="token number">10000000</span>
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Before editing <code>kibana.yml</code>, stop Kibana. After editing, restart Kibana.</p><p>For example, in the command shell of a Linux distribution that supports the <code>service</code> init system command wrapper, enter:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">service</span> kibana stop
</code></pre></div><p>After editing, enter:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">service</span> kibana start
</code></pre></div></div>`,3);function v(x,y){const t=s("ExternalLinkIcon");return o(),i(r,null,[p,m,u,h,e("p",null,[b,e("a",g,[f,c(t)]),_]),k],64)}var T=n(d,[["render",v]]);export{T as default};
