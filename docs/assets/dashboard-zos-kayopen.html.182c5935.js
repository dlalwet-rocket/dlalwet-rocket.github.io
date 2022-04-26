import{_ as n,e as a}from"./app.e2ee3b15.js";const s={},e=a(`<h1 id="update-the-odp-collection-configuration" tabindex="-1"><a class="header-anchor" href="#update-the-odp-collection-configuration" aria-hidden="true">#</a> Update the ODP collection configuration</h1><ol><li>On z/OS, edit the ODP collection configuration member <code>RKANPARU(KAYOPEN)</code> to specify the attribute groups required by the dashboard:</li></ol><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">collections</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">product</span><span class="token punctuation">:</span> km5            
    <span class="token key atrule">table</span><span class="token punctuation">:</span> ascpuutil        
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">0</span>             
    <span class="token key atrule">destination</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> pds
      <span class="token punctuation">-</span> open
  <span class="token punctuation">-</span> <span class="token key atrule">product</span><span class="token punctuation">:</span> km5            
    <span class="token key atrule">table</span><span class="token punctuation">:</span> km5wlmclpx       
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">0</span>             
    <span class="token key atrule">destination</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> pds
      <span class="token punctuation">-</span> open
  <span class="token punctuation">-</span> <span class="token key atrule">product</span><span class="token punctuation">:</span> km5            
    <span class="token key atrule">table</span><span class="token punctuation">:</span> m5stgcdth        
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">0</span>             
    <span class="token key atrule">destination</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> pds
      <span class="token punctuation">-</span> open
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><ol start="2"><li><p>Reload the configuration of collection tasks to reflect the updated <code>KAYOPEN</code> member.</p><p>For the job that runs the OMEGAMON z/OS monitoring agent, enter the following MVS <code>MODIFY</code> system command:</p><div class="language-plain ext-plain"><pre class="language-plain"><code>F &lt;job_name&gt;,KPQ,RELOAD_CONFIG,KAY
</code></pre></div><p>Replace <code>&lt;job_name&gt;</code> with the corresponding job name: for example, <code>OMEGDS</code>.</p></li></ol>`,4);function t(p,l){return e}var c=n(s,[["render",t]]);export{c as default};
