import{_ as n,e as a}from"./app.856c131d.js";const s={},e=a(`<h1 id="create-an-elasticsearch-index-template" tabindex="-1"><a class="header-anchor" href="#create-an-elasticsearch-index-template" aria-hidden="true">#</a> Create an Elasticsearch index template</h1><div class="custom-container tip"><p class="custom-container-title">Already configured Elastic for ODP?</p><p>Before creating a new index template, check for an existing index template that matches the <code>omegamon-*</code> index pattern.</p><p>In Kibana, select Management \u25B6 Stack Management \u25B6 Data: Index Management \u25B6 Index Templates.</p><p>If a matching template exists, then rather than creating a new index template, ensure that the existing template matches the current required characteristics.</p></div><p>The sample dashboards require an index template with the following characteristics:</p><ul><li><p>Applies to the index pattern <code>omegamon-*</code></p></li><li><p>Maps string fields to the <code>keyword</code> data type</p></li><li><p>Enables data streams (note the <code>data_stream</code> object in the following sample)</p></li></ul><p>Other characteristics of the index template are your choice.</p><p>Here is a sample index template for ODP data:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>PUT _index_template/omegamon
<span class="token punctuation">{</span>
  <span class="token property">&quot;index_patterns&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;omegamon-*&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;template&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;lifecycle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;omegamon-ds-ilm-policy&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;dynamic_templates&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;strings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;match_mapping_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;mapping&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data_stream&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>In <code>template.settings.lifecycle.name</code>, specify the name of the ILM policy that you want to use for ODP data.</p><h2 id="no-raw-fields" tabindex="-1"><a class="header-anchor" href="#no-raw-fields" aria-hidden="true">#</a> No <code>.raw</code> fields</h2><p>The index template maps all string fields to the <code>keyword</code> data type rather than the default <code>text</code> data type.</p><p>This mapping enables the sample dashboards to use the original field names for sorting and aggregation.</p><p>The sample dashboards do not need a separate <code>.raw</code> version of string fields.</p><h2 id="number-of-replicas" tabindex="-1"><a class="header-anchor" href="#number-of-replicas" aria-hidden="true">#</a> Number of replicas</h2><p>The sample index template does not specify a value for <code>number_of_replicas</code>.</p><p>Set the value of <code>number_of_replicas</code> to match your Elastic environment. The default value is 1.</p><p>If you are using a single-node Elastic environment\u2014for example, you are testing these dashboards in a small &quot;sandbox&quot; environment\u2014then there will be no replicas. In that case, if you use the default value of 1, then Elastic will report health issues due to the missing replicas. To avoid those health issues in a single-node environment, consider setting the number of replicas to 0:</p><div class="language-json ext-json"><pre class="language-json"><code>  <span class="token property">&quot;template&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;number_of_replicas&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;lifecycle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;omegamon-ds-ilm-policy&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><br><br><br><br></div></div>`,17);function t(p,o){return e}var l=n(s,[["render",t]]);export{l as default};
