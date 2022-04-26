import{_ as n,e as s}from"./app.58f22ce0.js";const a={},p=s(`<h1 id="optional-filter-fields" tabindex="-1"><a class="header-anchor" href="#optional-filter-fields" aria-hidden="true">#</a> Optional: Filter fields</h1><p>By default, the OMEGAMON Data Connect component of ODP forwards all data that it receives.</p><p>Optionally, you can specify a filter in the OMEGAMON Data Connect configuration file to forward only specific fields.</p><p>Filters are useful for reducing data volume if you have limited storage capacity.</p><p>However, filters restrict the fields that are available for analysis.</p><p>If you decide that you want to limit the forwarded data to just the fields used by the sample dashboards, add the following filter to the OMEGAMON Data Connect configuration file:</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>This filter corresponds to the <em>current</em> sample dashboards. You might want to create dashboards that use other fields, or extend the samples with other fields. Future samples might require fields that this filter excludes. It is your decision whether to introduce a filter, and how to manage it.</p></div><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">connect</span><span class="token punctuation">:</span>
  <span class="token key atrule">filter</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">products</span><span class="token punctuation">:</span>
      <span class="token key atrule">km5</span><span class="token punctuation">:</span>
        <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
        <span class="token key atrule">tables</span><span class="token punctuation">:</span>
          <span class="token key atrule">ascpuutil</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> managed_system
              <span class="token punctuation">-</span> job_name
              <span class="token punctuation">-</span> cpu_percent
              <span class="token punctuation">-</span> tcb_percent
              <span class="token punctuation">-</span> srb_percent
              <span class="token punctuation">-</span> svcclass
              <span class="token punctuation">-</span> asid
              <span class="token punctuation">-</span> jesjobid
              <span class="token punctuation">-</span> type
              <span class="token punctuation">-</span> ifa_percent
              <span class="token punctuation">-</span> ifa_on_cp_percent
              <span class="token punctuation">-</span> ziip_percent
              <span class="token punctuation">-</span> ziip_on_cp_percent
              <span class="token punctuation">-</span> sysplex_name
              <span class="token punctuation">-</span> smf_id
          <span class="token key atrule">m5stgcdth</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> managed_system
              <span class="token punctuation">-</span> smf_id
              <span class="token punctuation">-</span> job_name
              <span class="token punctuation">-</span> service_class
              <span class="token punctuation">-</span> asid
              <span class="token punctuation">-</span> elapsed_time
              <span class="token punctuation">-</span> percentage_csa_in_use
              <span class="token punctuation">-</span> percentage_ecsa_in_use
              <span class="token punctuation">-</span> percentage_sqa_in_use
              <span class="token punctuation">-</span> percentage_esqa_in_use
              <span class="token punctuation">-</span> amount_csa_in_use
              <span class="token punctuation">-</span> amount_ecsa_in_use
              <span class="token punctuation">-</span> amount_sqa_in_use
              <span class="token punctuation">-</span> amount_esqa_in_use
              <span class="token punctuation">-</span> recording_end_time
              <span class="token punctuation">-</span> recording_start_time
              <span class="token punctuation">-</span> sysplex_name
          <span class="token key atrule">mplxcpcsum</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> sysplex_node
              <span class="token punctuation">-</span> sysplex_originnode
              <span class="token punctuation">-</span> lpar_node
              <span class="token punctuation">-</span> cpc_serial_number
              <span class="token punctuation">-</span> sysplex_name
              <span class="token punctuation">-</span> lpar_name
              <span class="token punctuation">-</span> lpar_smf_id
              <span class="token punctuation">-</span> effective_msu_capacity
              <span class="token punctuation">-</span> capacity_indicator
              <span class="token punctuation">-</span> adjustment_reason
              <span class="token punctuation">-</span> physical_pct_standard_cp
              <span class="token punctuation">-</span> physical_pct_ziip
              <span class="token punctuation">-</span> physical_pct_ifl
              <span class="token punctuation">-</span> physical_pct_icf
              <span class="token punctuation">-</span> recording_start_time
              <span class="token punctuation">-</span> smf_id
          <span class="token key atrule">km5msucap</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> managed_system
              <span class="token punctuation">-</span> record_type
              <span class="token punctuation">-</span> four_hour_msus
              <span class="token punctuation">-</span> lpar_defined_capacity_set
              <span class="token punctuation">-</span> average_percent_time_capped
              <span class="token punctuation">-</span> average_percent_time_uncapped
              <span class="token punctuation">-</span> lpar_capacity_limit_basis
              <span class="token punctuation">-</span> lpar_capacity_limit
              <span class="token punctuation">-</span> percent_lpar_msu_capacity
              <span class="token punctuation">-</span> lpar_group_name
              <span class="token punctuation">-</span> lpar_group_capacity_limit
              <span class="token punctuation">-</span> group_lpar_msu_limit
              <span class="token punctuation">-</span> average_unused_group_msus
              <span class="token punctuation">-</span> average_used_group_msus
              <span class="token punctuation">-</span> average_percent_group_capacity
              <span class="token punctuation">-</span> time_period
              <span class="token punctuation">-</span> percent_time_uncapped
              <span class="token punctuation">-</span> uncapped_msus_hour
              <span class="token punctuation">-</span> percent_lpar_uncapped
              <span class="token punctuation">-</span> percent_time_capped
              <span class="token punctuation">-</span> capped_msus_hour
              <span class="token punctuation">-</span> percent_lpar_capped
              <span class="token punctuation">-</span> unused_group_msus_hour
              <span class="token punctuation">-</span> used_group_msus_hour
              <span class="token punctuation">-</span> percent_group_capacity
              <span class="token punctuation">-</span> sysplex_name
              <span class="token punctuation">-</span> smf_id
          <span class="token key atrule">syscpuutil</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> managed_system
              <span class="token punctuation">-</span> average_cpu_percent
              <span class="token punctuation">-</span> undispatched_tasks
              <span class="token punctuation">-</span> mvs_overhead
              <span class="token punctuation">-</span> total_tcb_pct
              <span class="token punctuation">-</span> total_srb_pct
              <span class="token punctuation">-</span> partition_lcpd_pct
              <span class="token punctuation">-</span> partition_pcpd_pct
              <span class="token punctuation">-</span> partition_overhead_pct
              <span class="token punctuation">-</span> cpus_online
              <span class="token punctuation">-</span> average_ifa_percent
              <span class="token punctuation">-</span> average_ifa_on_cp_percent
              <span class="token punctuation">-</span> rmf_mvs_cpu_percent
              <span class="token punctuation">-</span> rmf_lpar_cpu_percent
              <span class="token punctuation">-</span> four_hour_msus
              <span class="token punctuation">-</span> average_ziip_percent
              <span class="token punctuation">-</span> average_ziip_on_cp_percent
              <span class="token punctuation">-</span> hiperdispatch_management
              <span class="token punctuation">-</span> percent_lpar_msu_capacity
              <span class="token punctuation">-</span> lpar_group_capacity_limit
              <span class="token punctuation">-</span> lpar_group_name
              <span class="token punctuation">-</span> group_lpar_msu_limit
              <span class="token punctuation">-</span> average_unused_group_msus
              <span class="token punctuation">-</span> rmf_mvs_cpu_pct_snapshot
              <span class="token punctuation">-</span> sysplex_name
              <span class="token punctuation">-</span> smf_id
          <span class="token key atrule">km5wlmclpx</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> managed_system
              <span class="token punctuation">-</span> class_name
              <span class="token punctuation">-</span> period
              <span class="token punctuation">-</span> goal_importance
              <span class="token punctuation">-</span> class_type
              <span class="token punctuation">-</span> goal_type
              <span class="token punctuation">-</span> goal_value
              <span class="token punctuation">-</span> goal_percentile
              <span class="token punctuation">-</span> transaction_rate
              <span class="token punctuation">-</span> transaction_completions
              <span class="token punctuation">-</span> transaction_total
              <span class="token punctuation">-</span> transaction_queue_time
              <span class="token punctuation">-</span> transaction_execution_time
              <span class="token punctuation">-</span> transaction_elapsed_time
              <span class="token punctuation">-</span> total_sus_second
              <span class="token punctuation">-</span> total_delay_percent
              <span class="token punctuation">-</span> workload_name
              <span class="token punctuation">-</span> total_service_units
              <span class="token punctuation">-</span> sysplex_name
              <span class="token punctuation">-</span> io_rate
              <span class="token punctuation">-</span> record_type
              <span class="token punctuation">-</span> lpar_name
              <span class="token punctuation">-</span> smf_id
          <span class="token key atrule">m5stgfdth</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> managed_system
              <span class="token punctuation">-</span> smf_id
              <span class="token punctuation">-</span> job_name
              <span class="token punctuation">-</span> asid
              <span class="token punctuation">-</span> service_class
              <span class="token punctuation">-</span> total_frames
              <span class="token punctuation">-</span> active_frames
              <span class="token punctuation">-</span> idle_frames
              <span class="token punctuation">-</span> active_frames_working_set
              <span class="token punctuation">-</span> active_frames_fixed
              <span class="token punctuation">-</span> active_frames_div
              <span class="token punctuation">-</span> auxiliary_storage_slots
              <span class="token punctuation">-</span> page_in_rate
              <span class="token punctuation">-</span> shared_pages_total_views
              <span class="token punctuation">-</span> shared_pages_total_valid
              <span class="token punctuation">-</span> shared_pages_validation_rate
              <span class="token punctuation">-</span> memory_objects_allocated
              <span class="token punctuation">-</span> one_meg_frames_in_real
              <span class="token punctuation">-</span> recording_end_time
              <span class="token punctuation">-</span> recording_start_time
              <span class="token punctuation">-</span> sysplex_name
          <span class="token key atrule">mrptcls</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> report_class
              <span class="token punctuation">-</span> address_space_count
              <span class="token punctuation">-</span> velocity
              <span class="token punctuation">-</span> page_rate
              <span class="token punctuation">-</span> io_rate
              <span class="token punctuation">-</span> managed_system
              <span class="token punctuation">-</span> sysplex_name
          <span class="token key atrule">m5stgdeth</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> managed_system
              <span class="token punctuation">-</span> smf_id
              <span class="token punctuation">-</span> job_name
              <span class="token punctuation">-</span> asid
              <span class="token punctuation">-</span> type
              <span class="token punctuation">-</span> service_class
              <span class="token punctuation">-</span> period
              <span class="token punctuation">-</span> avg_storage
              <span class="token punctuation">-</span> avg_storage_hv_common
              <span class="token punctuation">-</span> avg_storage_hv_shared
              <span class="token punctuation">-</span> avg_storage_hv_private
              <span class="token punctuation">-</span> high_water_mark_hv_common
              <span class="token punctuation">-</span> memory_limit
              <span class="token punctuation">-</span> recording_end_time
              <span class="token punctuation">-</span> recording_start_time
              <span class="token punctuation">-</span> high_water_mark_hv_shared
              <span class="token punctuation">-</span> avg_storage8
              <span class="token punctuation">-</span> avg_storage_hv_common8
              <span class="token punctuation">-</span> avg_storage_hv_shared8
              <span class="token punctuation">-</span> avg_storage_hv_private8
              <span class="token punctuation">-</span> high_water_mark_hv_common8
              <span class="token punctuation">-</span> high_water_mark_hv_shared8
              <span class="token punctuation">-</span> memory_limit8
              <span class="token punctuation">-</span> sysplex_name
          <span class="token key atrule">km5wlmclrx</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> managed_system
              <span class="token punctuation">-</span> smf_id
              <span class="token punctuation">-</span> class_name
              <span class="token punctuation">-</span> period
              <span class="token punctuation">-</span> goal_importance
              <span class="token punctuation">-</span> class_type
              <span class="token punctuation">-</span> goal_type
              <span class="token punctuation">-</span> goal_value
              <span class="token punctuation">-</span> goal_percentile
              <span class="token punctuation">-</span> transactions_in_goal
              <span class="token punctuation">-</span> transaction_completions
              <span class="token punctuation">-</span> transaction_total
              <span class="token punctuation">-</span> transaction_queue_time_1024_mics
              <span class="token punctuation">-</span> transaction_execution_time_1024_mics
              <span class="token punctuation">-</span> transaction_elapsed_time_1024_mics
              <span class="token punctuation">-</span> total_sus
              <span class="token punctuation">-</span> cpu_sus
              <span class="token punctuation">-</span> ziip_sus
              <span class="token punctuation">-</span> ziip_on_cp_sus
              <span class="token punctuation">-</span> io_sus
              <span class="token punctuation">-</span> mso_sus
              <span class="token punctuation">-</span> srb_sus
              <span class="token punctuation">-</span> workload_name
              <span class="token punctuation">-</span> sysplex_name
              <span class="token punctuation">-</span> lpar_name
          <span class="token key atrule">lpclust</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> managed_system
              <span class="token punctuation">-</span> lpar_name
              <span class="token punctuation">-</span> effective_weight_percent
              <span class="token punctuation">-</span> physical_weight_percent
              <span class="token punctuation">-</span> physical_cpu_percent
              <span class="token punctuation">-</span> logical_weight_percent
              <span class="token punctuation">-</span> physical_cps
              <span class="token punctuation">-</span> special_cps
              <span class="token punctuation">-</span> cpc_total_weight
              <span class="token punctuation">-</span> cpc_cpu_percent
              <span class="token punctuation">-</span> cpc_cpu_overhead
              <span class="token punctuation">-</span> cluster_name
              <span class="token punctuation">-</span> cpc_model
              <span class="token punctuation">-</span> cpc_serial
              <span class="token punctuation">-</span> processor_class
              <span class="token punctuation">-</span> sysplex_name
              <span class="token punctuation">-</span> smf_id
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br><span class="line-number">253</span><br><span class="line-number">254</span><br><span class="line-number">255</span><br><span class="line-number">256</span><br><span class="line-number">257</span><br><span class="line-number">258</span><br></div></div><p>After editing the configuration file, restart OMEGAMON Data Connect.</p><p>For example, if you are running OMEGAMON Data Connect on z/OS, enter the following MVS <code>MODIFY</code> system command:</p><div class="language-plain ext-plain"><pre class="language-plain"><code>F OMEGCONN,APPL=RESTART
</code></pre></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Restarting OMEGAMON Data Connect flushes unsent records. Flushed records are lost, not sent to any destination.</p></div>`,12);function e(t,l){return p}var u=n(a,[["render",e]]);export{u as default};
