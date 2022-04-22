import{_ as e,o as t,c as l,a as n,d as s,t as c,F as u,e as a}from"./app.aa1f03fb.js";const o={},r=n("h1",{id:"update-the-odp-collection-configuration",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#update-the-odp-collection-configuration","aria-hidden":"true"},"#"),s(" Update the ODP collection configuration")],-1),i=s("On z/OS, edit the ODP collection configuration member "),k=n("code",null,"RKANPARU(KAYOPEN)",-1),b=a(`<div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">collections</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">product</span><span class="token punctuation">:</span> kd5
    <span class="token key atrule">table</span><span class="token punctuation">:</span> statedmp
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">0</span>
    <span class="token key atrule">destination</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> pds
      <span class="token punctuation">-</span> open
  <span class="token punctuation">-</span> <span class="token key atrule">product</span><span class="token punctuation">:</span> kd5
    <span class="token key atrule">table</span><span class="token punctuation">:</span> opersys
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">0</span>
    <span class="token key atrule">destination</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> pds
      <span class="token punctuation">-</span> open
  <span class="token punctuation">-</span> <span class="token key atrule">product</span><span class="token punctuation">:</span> kd5
    <span class="token key atrule">table</span><span class="token punctuation">:</span> dp_sy_exc
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">0</span>
    <span class="token key atrule">destination</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> pds
      <span class="token punctuation">-</span> open
  <span class="token punctuation">-</span> <span class="token key atrule">product</span><span class="token punctuation">:</span> kd5
    <span class="token key atrule">table</span><span class="token punctuation">:</span> statlokc
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">0</span>
    <span class="token key atrule">destination</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> pds
      <span class="token punctuation">-</span> open
  <span class="token punctuation">-</span> <span class="token key atrule">product</span><span class="token punctuation">:</span> kd5
    <span class="token key atrule">table</span><span class="token punctuation">:</span> statlogs
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">0</span>
    <span class="token key atrule">destination</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> pds
      <span class="token punctuation">-</span> open
  <span class="token punctuation">-</span> <span class="token key atrule">product</span><span class="token punctuation">:</span> kd5
    <span class="token key atrule">table</span><span class="token punctuation">:</span> real254
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">0</span>
    <span class="token key atrule">destination</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> pds
      <span class="token punctuation">-</span> open
  <span class="token punctuation">-</span> <span class="token key atrule">product</span><span class="token punctuation">:</span> kd5
    <span class="token key atrule">table</span><span class="token punctuation">:</span> edmpool
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">0</span>
    <span class="token key atrule">destination</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> pds
      <span class="token punctuation">-</span> open
  <span class="token punctuation">-</span> <span class="token key atrule">product</span><span class="token punctuation">:</span> kd5
    <span class="token key atrule">table</span><span class="token punctuation">:</span> real2252
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">0</span>
    <span class="token key atrule">destination</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> pds
      <span class="token punctuation">-</span> open
  <span class="token punctuation">-</span> <span class="token key atrule">product</span><span class="token punctuation">:</span> kd5
    <span class="token key atrule">table</span><span class="token punctuation">:</span> real225
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">0</span>
    <span class="token key atrule">destination</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> pds
      <span class="token punctuation">-</span> open
  <span class="token punctuation">-</span> <span class="token key atrule">product</span><span class="token punctuation">:</span> kd5
    <span class="token key atrule">table</span><span class="token punctuation">:</span> realsqlc
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">0</span>
    <span class="token key atrule">destination</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> pds
      <span class="token punctuation">-</span> open
  <span class="token punctuation">-</span> <span class="token key atrule">product</span><span class="token punctuation">:</span> kd5
    <span class="token key atrule">table</span><span class="token punctuation">:</span> realqbst
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">0</span>
    <span class="token key atrule">destination</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> pds
      <span class="token punctuation">-</span> open
  <span class="token punctuation">-</span> <span class="token key atrule">product</span><span class="token punctuation">:</span> kd5
    <span class="token key atrule">table</span><span class="token punctuation">:</span> gstqxst
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">0</span>
    <span class="token key atrule">destination</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> pds
      <span class="token punctuation">-</span> open
  <span class="token punctuation">-</span> <span class="token key atrule">product</span><span class="token punctuation">:</span> kd5
    <span class="token key atrule">table</span><span class="token punctuation">:</span> real230
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">0</span>
    <span class="token key atrule">destination</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> pds
      <span class="token punctuation">-</span> open
  <span class="token punctuation">-</span> <span class="token key atrule">product</span><span class="token punctuation">:</span> kd5
    <span class="token key atrule">table</span><span class="token punctuation">:</span> statqxst
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">0</span>
    <span class="token key atrule">destination</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> pds
      <span class="token punctuation">-</span> open
  <span class="token punctuation">-</span> <span class="token key atrule">product</span><span class="token punctuation">:</span> kd5
    <span class="token key atrule">table</span><span class="token punctuation">:</span> db2msg
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">0</span>
    <span class="token key atrule">destination</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> pds
      <span class="token punctuation">-</span> open
  <span class="token punctuation">-</span> <span class="token key atrule">product</span><span class="token punctuation">:</span> kd5
    <span class="token key atrule">table</span><span class="token punctuation">:</span> dp_srm_log
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">0</span>
    <span class="token key atrule">destination</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> pds
      <span class="token punctuation">-</span> open
  <span class="token punctuation">-</span> <span class="token key atrule">product</span><span class="token punctuation">:</span> kd5
    <span class="token key atrule">table</span><span class="token punctuation">:</span> dp_srm_sub
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">0</span>
    <span class="token key atrule">destination</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> pds
      <span class="token punctuation">-</span> open
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br></div></div>`,1),m=a(`<li><p>Reload the configuration of collection tasks to reflect the updated <code>KAYOPEN</code> member.</p><p>For each job that runs an OMEGAMON monitoring agent (including the monitoring server job), enter the following MVS <code>MODIFY</code> system command:</p><div class="language-plain ext-plain"><pre class="language-plain"><code>F &lt;job_name&gt;,KPQ RELOAD_CONFIG,KAY
</code></pre></div><p>Replace <code>&lt;job_name&gt;</code> with the corresponding job name for each agent: for example, <code>OMEGDS</code>.</p></li>`,1);function d(p,y){return t(),l(u,null,[r,n("ol",null,[n("li",null,[n("p",null,[i,k,s(" to specify the attribute groups required by the "+c(p.$frontmatter.bundle)+" bundle:",1)]),b]),m])],64)}var _=e(o,[["render",d]]);export{_ as default};
