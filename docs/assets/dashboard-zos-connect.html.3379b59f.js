import{_ as n,e as s}from"./app.58f22ce0.js";const a={},e=s(`<h1 id="configure-omegamon-data-connect" tabindex="-1"><a class="header-anchor" href="#configure-omegamon-data-connect" aria-hidden="true">#</a> Configure OMEGAMON Data Connect</h1><p>Edit the OMEGAMON Data Connect configuration file <code>connect.yaml</code> to specify the attribute groups and fields that you want to export to Prometheus:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">connect</span><span class="token punctuation">:</span>
  <span class="token key atrule">output</span><span class="token punctuation">:</span>
    <span class="token key atrule">prometheus</span><span class="token punctuation">:</span>
      <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">mappings</span><span class="token punctuation">:</span>
        <span class="token key atrule">products</span><span class="token punctuation">:</span>
          <span class="token key atrule">km5</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">tables</span><span class="token punctuation">:</span>
              <span class="token key atrule">km5wlmclpx</span><span class="token punctuation">:</span>
                <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
                <span class="token key atrule">metrics</span><span class="token punctuation">:</span>
                  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> total_sus_second
                    <span class="token key atrule">type</span><span class="token punctuation">:</span> gauge
                  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> transaction_rate
                    <span class="token key atrule">type</span><span class="token punctuation">:</span> gauge
                  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> transaction_total
                    <span class="token key atrule">type</span><span class="token punctuation">:</span> counter
                  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> cpu_using_percent
                    <span class="token key atrule">type</span><span class="token punctuation">:</span> gauge
                  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> total_delay_percent
                    <span class="token key atrule">type</span><span class="token punctuation">:</span> gauge
                  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> total_service_units
                    <span class="token key atrule">type</span><span class="token punctuation">:</span> gauge
                <span class="token key atrule">labels</span><span class="token punctuation">:</span>
                  <span class="token punctuation">-</span> sysplex_name
                  <span class="token punctuation">-</span> workload_name
                  <span class="token punctuation">-</span> class_name
                  <span class="token punctuation">-</span> class_type
              <span class="token key atrule">ascpuutil</span><span class="token punctuation">:</span>
                <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
                <span class="token key atrule">metrics</span><span class="token punctuation">:</span>
                  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> cpu_percent
                    <span class="token key atrule">type</span><span class="token punctuation">:</span> gauge
                  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> tcb_percent
                    <span class="token key atrule">type</span><span class="token punctuation">:</span> gauge
                  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> srb_percent
                    <span class="token key atrule">type</span><span class="token punctuation">:</span> gauge
                  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> ifa_percent
                    <span class="token key atrule">type</span><span class="token punctuation">:</span> gauge
                  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> ifa_on_cp_percent
                    <span class="token key atrule">type</span><span class="token punctuation">:</span> gauge
                  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> ziip_percent
                    <span class="token key atrule">type</span><span class="token punctuation">:</span> gauge
                  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> ziip_on_cp_percent
                    <span class="token key atrule">type</span><span class="token punctuation">:</span> gauge
                <span class="token key atrule">labels</span><span class="token punctuation">:</span>
                  <span class="token punctuation">-</span> sysplex_name
                  <span class="token punctuation">-</span> job_name
              <span class="token key atrule">m5stgcdth</span><span class="token punctuation">:</span>
                <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
                <span class="token key atrule">metrics</span><span class="token punctuation">:</span>
                  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> percentage_csa_in_use
                    <span class="token key atrule">type</span><span class="token punctuation">:</span> gauge
                  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> percentage_ecsa_in_use
                    <span class="token key atrule">type</span><span class="token punctuation">:</span> gauge
                  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> percentage_sqa_in_use
                    <span class="token key atrule">type</span><span class="token punctuation">:</span> gauge
                  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> percentage_esqa_in_use
                    <span class="token key atrule">type</span><span class="token punctuation">:</span> gauge
                <span class="token key atrule">labels</span><span class="token punctuation">:</span>
                  <span class="token punctuation">-</span> sysplex_name
                  <span class="token punctuation">-</span> job_name
<span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">address</span><span class="token punctuation">:</span> 0.0.0.0
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">9070</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br></div></div><p>Start, or restart, OMEGAMON Data Connect to refresh its configuration.</p><p>The specified metrics will be published at the following endpoint URL:</p><p><code>http://&lt;host_name&gt;:9070/metrics</code></p><p>Example data at the endpoint:</p><div class="language-plain ext-plain"><pre class="language-plain"><code># HELP m5stgcdth_percentage_esqa_in_use  
# TYPE m5stgcdth_percentage_esqa_in_use gauge
m5stgcdth_percentage_esqa_in_use{sysplex_name=&quot;DEM2PLEX&quot;,smf_id=&quot;RSB5&quot;,job_name=&quot;HZSPROC&quot;,} 0.0
m5stgcdth_percentage_esqa_in_use{sysplex_name=&quot;DEM2PLEX&quot;,smf_id=&quot;RSB4&quot;,job_name=&quot;RMF&quot;,} 0.0
...
# HELP km5wlmclpx_total_service_units  
# TYPE km5wlmclpx_total_service_units gauge
km5wlmclpx_total_service_units{sysplex_name=&quot;RSPLEXL6&quot;,workload_name=&quot;STC&quot;,class_name=&quot;STCLO&quot;,class_type=&quot;Service_Class&quot;,} 5613296.0
km5wlmclpx_total_service_units{sysplex_name=&quot;RSPLEXL6&quot;,workload_name=&quot;DB2&quot;,class_name=&quot;DB2&quot;,class_type=&quot;Service_Class&quot;,} 72081.0
...
# HELP m5stgcdth_percentage_csa_in_use  
# TYPE m5stgcdth_percentage_csa_in_use gauge
m5stgcdth_percentage_csa_in_use{sysplex_name=&quot;DEM2PLEX&quot;,smf_id=&quot;RSB5&quot;,job_name=&quot;HZSPROC&quot;,} 0.0
m5stgcdth_percentage_csa_in_use{sysplex_name=&quot;DEM2PLEX&quot;,smf_id=&quot;RSB4&quot;,job_name=&quot;RMF&quot;,} 0.0
...
</code></pre></div>`,8);function p(t,l){return e}var u=n(a,[["render",p]]);export{u as default};
