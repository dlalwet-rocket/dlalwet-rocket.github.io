import{_ as n,e as s}from"./app.58f22ce0.js";const a={},e=s(`<h1 id="optional-filter-fields" tabindex="-1"><a class="header-anchor" href="#optional-filter-fields" aria-hidden="true">#</a> Optional: Filter fields</h1><p>By default, the OMEGAMON Data Connect component of ODP forwards all data that it receives.</p><p>Optionally, you can specify a filter in the OMEGAMON Data Connect configuration file to forward only specific fields.</p><p>Filters are useful for reducing data volume if you have limited storage capacity.</p><p>However, filters restrict the fields that are available for analysis.</p><p>If you decide that you want to limit the forwarded data to just the fields used by the sample dashboards, add the following filter to the OMEGAMON Data Connect configuration file:</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>This filter corresponds to the <em>current</em> sample dashboards. You might want to create dashboards that use other fields, or extend the samples with other fields. Future samples might require fields that this filter excludes. It is your decision whether to introduce a filter, and how to manage it.</p></div><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">connect</span><span class="token punctuation">:</span>
  <span class="token key atrule">filter</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">products</span><span class="token punctuation">:</span>
      <span class="token key atrule">kc5</span><span class="token punctuation">:</span>
        <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
        <span class="token key atrule">tables</span><span class="token punctuation">:</span>
          <span class="token key atrule">cicscdm</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> system_id
              <span class="token punctuation">-</span> cics_region_name
              <span class="token punctuation">-</span> tcb_mode_name
              <span class="token punctuation">-</span> real_time_cics_spent_in_mvs_wait
              <span class="token punctuation">-</span> total_of_real_time_tcb_has_been_dispatched_by_mvs
              <span class="token punctuation">-</span> cpu_time_used_by_this_tcb_for_dispatcher_task
              <span class="token punctuation">-</span> total_cpu_time_used_by_this_tcb
          <span class="token key atrule">cicsbna</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> system_id
              <span class="token punctuation">-</span> cics_region_name
              <span class="token punctuation">-</span> detailed_short_term_percentage
              <span class="token punctuation">-</span> detailed_long_term_percentage
              <span class="token punctuation">-</span> resource_type
              <span class="token punctuation">-</span> resource_name
              <span class="token punctuation">-</span> wait_type
              <span class="token punctuation">-</span> resource_type_name
              <span class="token punctuation">-</span> short_term_sample_count
              <span class="token punctuation">-</span> long_term_sample_count
              <span class="token punctuation">-</span> short_term_elapsed_time
              <span class="token punctuation">-</span> long_term_elapsed_time
              <span class="token punctuation">-</span> display_threshold
              <span class="token punctuation">-</span> translated_wait_reason
          <span class="token key atrule">cicswbs</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> system_id
              <span class="token punctuation">-</span> cics_region_name
              <span class="token punctuation">-</span> web_service_name
              <span class="token punctuation">-</span> pipeline_name
              <span class="token punctuation">-</span> program_name
              <span class="token punctuation">-</span> urimap_name
              <span class="token punctuation">-</span> program_interface
              <span class="token punctuation">-</span> status
              <span class="token punctuation">-</span> type
              <span class="token punctuation">-</span> current_request_rate
              <span class="token punctuation">-</span> current_timeout_percent
              <span class="token punctuation">-</span> average_response_time
              <span class="token punctuation">-</span> total_number_of_faults
              <span class="token punctuation">-</span> total_number_of_timeouts
              <span class="token punctuation">-</span> hwm_of_response_time
              <span class="token punctuation">-</span> hwm_of_request_body_length
              <span class="token punctuation">-</span> hwm_of_response_body_length
          <span class="token key atrule">wss</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> system_id
              <span class="token punctuation">-</span> cics_region_name
              <span class="token punctuation">-</span> percent_of_time_waiting_on_adabas
              <span class="token punctuation">-</span> average_response_time
              <span class="token punctuation">-</span> greater_than_400_pct_of_goal_transaction_count
              <span class="token punctuation">-</span> one_hundred_pct_of_goal_transaction_count
              <span class="token punctuation">-</span> one_hundred_and_ten_pct_of_goal_transaction_count
              <span class="token punctuation">-</span> one_hundred_and_twenty_pct_of_goal_transaction_count
              <span class="token punctuation">-</span> one_hundred_and_thirty_pct_of_goal_transaction_count
              <span class="token punctuation">-</span> one_hundred_and_forty_pct_of_goal_transaction_count
              <span class="token punctuation">-</span> one_hundred_and_fifty_pct_of_goal_transaction_count
              <span class="token punctuation">-</span> two_hundreds_pct_of_goal_transaction_count
              <span class="token punctuation">-</span> four_hundreds_pct_of_goal_transaction_count
              <span class="token punctuation">-</span> fifty_pct_of_goal_transaction_count
              <span class="token punctuation">-</span> sixty_pct_of_goal_transaction_count
              <span class="token punctuation">-</span> seventy_pct_of_goal_transaction_count
              <span class="token punctuation">-</span> eighty_pct_of_goal_transaction_count
              <span class="token punctuation">-</span> ninety_pct_of_goal_transaction_count
              <span class="token punctuation">-</span> percent_of_time_waiting_on_db2
              <span class="token punctuation">-</span> percent_of_time_waiting_on_datacom
              <span class="token punctuation">-</span> percent_of_time_waiting_on_dli
              <span class="token punctuation">-</span> percent_of_time_waiting_on_file_control
              <span class="token punctuation">-</span> goal_type
              <span class="token punctuation">-</span> goal_response_time
              <span class="token punctuation">-</span> percent_of_time_waiting_on_idms
              <span class="token punctuation">-</span> percent_of_time_waiting_on_journal_control
              <span class="token punctuation">-</span> percent_of_time_waiting_on_mro
              <span class="token punctuation">-</span> percent_of_time_waiting_on_unidentifiable
              <span class="token punctuation">-</span> percent_of_goal
              <span class="token punctuation">-</span> performance_index
              <span class="token punctuation">-</span> percent_of_time_waiting_on_redispatch
              <span class="token punctuation">-</span> service_class_name
              <span class="token punctuation">-</span> summary_type
              <span class="token punctuation">-</span> percent_of_time_waiting_on_supra
              <span class="token punctuation">-</span> percent_of_time_waiting_on_td_io
              <span class="token punctuation">-</span> transactions_total
              <span class="token punctuation">-</span> transaction_id
              <span class="token punctuation">-</span> transaction_rate_per_minute
              <span class="token punctuation">-</span> percent_of_time_waiting_on_ts_io
              <span class="token punctuation">-</span> percent_of_time_waiting_on_mq
              <span class="token punctuation">-</span> percent_of_time_waiting_on_interval_control
              <span class="token punctuation">-</span> percent_of_time_waiting_on_enq_delay
              <span class="token punctuation">-</span> average_time_using_cpu
              <span class="token punctuation">-</span> percent_of_time_waiting_for_1st_dispatch
              <span class="token punctuation">-</span> average_dsa_storage_occupied
              <span class="token punctuation">-</span> average_edsa_storage_occupied
              <span class="token punctuation">-</span> number_of_abended_transactions
          <span class="token key atrule">cicstss</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> system_id
              <span class="token punctuation">-</span> cics_region_name
              <span class="token punctuation">-</span> pools_defined
              <span class="token punctuation">-</span> pools_connected
              <span class="token punctuation">-</span> write_requests
              <span class="token punctuation">-</span> percent_aux_cis_in_use
              <span class="token punctuation">-</span> percent_aux_active_strings
              <span class="token punctuation">-</span> percent_aux_buffers_in_use
              <span class="token punctuation">-</span> total_tasks_suspended
              <span class="token punctuation">-</span> main_storage_used
              <span class="token punctuation">-</span> percent_main_storage_used
          <span class="token key atrule">cicsrov</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> system_id
              <span class="token punctuation">-</span> cics_region_name
              <span class="token punctuation">-</span> cics_version
              <span class="token punctuation">-</span> region_status
              <span class="token punctuation">-</span> vtam_acb_open
              <span class="token punctuation">-</span> transaction_rate
              <span class="token punctuation">-</span> maximum_tasks_percent
              <span class="token punctuation">-</span> cpu_utilization
              <span class="token punctuation">-</span> io_rate
              <span class="token punctuation">-</span> page_rate
              <span class="token punctuation">-</span> storage_violations
              <span class="token punctuation">-</span> ices
              <span class="token punctuation">-</span> sos
              <span class="token punctuation">-</span> xcfgroup
              <span class="token punctuation">-</span> worst_region_performance_index
              <span class="token punctuation">-</span> worst_region_service_class_name
              <span class="token punctuation">-</span> queued_remote_requests
              <span class="token punctuation">-</span> asid
              <span class="token punctuation">-</span> rls_status
              <span class="token punctuation">-</span> cicsplex_name
          <span class="token key atrule">cicsstor</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> system_id
              <span class="token punctuation">-</span> cics_region_name
              <span class="token punctuation">-</span> area
              <span class="token punctuation">-</span> sos
              <span class="token punctuation">-</span> percent_used
              <span class="token punctuation">-</span> storage_available
              <span class="token punctuation">-</span> storage_limit
              <span class="token punctuation">-</span> storage_allocated
              <span class="token punctuation">-</span> storage_in_use
              <span class="token punctuation">-</span> page_pool_area
              <span class="token punctuation">-</span> region_size
              <span class="token punctuation">-</span> zos_storage_free
          <span class="token key atrule">kcpwss</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> percent_of_time_waiting_on_adabas
              <span class="token punctuation">-</span> average_response_time
              <span class="token punctuation">-</span> greater_than_400_pct_of_goal_transaction_count
              <span class="token punctuation">-</span> one_hundred_pct_of_goal_transaction_count
              <span class="token punctuation">-</span> one_hundred_and_ten_pct_of_goal_transaction_count
              <span class="token punctuation">-</span> one_hundred_and_twenty_pct_of_goal_transaction_count
              <span class="token punctuation">-</span> one_hundred_and_thirty_pct_of_goal_transaction_count
              <span class="token punctuation">-</span> one_hundred_and_forty_pct_of_goal_transaction_count
              <span class="token punctuation">-</span> one_hundred_and_fifty_pct_of_goal_transaction_count
              <span class="token punctuation">-</span> two_hundreds_pct_of_goal_transaction_count
              <span class="token punctuation">-</span> four_hundreds_pct_of_goal_transaction_count
              <span class="token punctuation">-</span> fifty_pct_of_goal_transaction_count
              <span class="token punctuation">-</span> sixty_pct_of_goal_transaction_count
              <span class="token punctuation">-</span> seventy_pct_of_goal_transaction_count
              <span class="token punctuation">-</span> eighty_pct_of_goal_transaction_count
              <span class="token punctuation">-</span> ninety_pct_of_goal_transaction_count
              <span class="token punctuation">-</span> percent_of_time_waiting_on_db2
              <span class="token punctuation">-</span> percent_of_time_waiting_on_datacom
              <span class="token punctuation">-</span> percent_of_time_waiting_on_dli
              <span class="token punctuation">-</span> percent_of_time_waiting_on_file_control
              <span class="token punctuation">-</span> goal_type
              <span class="token punctuation">-</span> goal_response_time
              <span class="token punctuation">-</span> percent_of_time_waiting_on_idms
              <span class="token punctuation">-</span> percent_of_time_waiting_on_journal_control
              <span class="token punctuation">-</span> percent_of_time_waiting_on_mro
              <span class="token punctuation">-</span> percent_of_time_waiting_on_unidentifiable
              <span class="token punctuation">-</span> percent_of_goal
              <span class="token punctuation">-</span> performance_index
              <span class="token punctuation">-</span> percent_of_time_waiting_on_redispatch
              <span class="token punctuation">-</span> service_class_name
              <span class="token punctuation">-</span> summary_type
              <span class="token punctuation">-</span> percent_of_time_waiting_on_supra
              <span class="token punctuation">-</span> percent_of_time_waiting_on_td_io
              <span class="token punctuation">-</span> transactions_total
              <span class="token punctuation">-</span> transaction_id
              <span class="token punctuation">-</span> transaction_rate_per_minute
              <span class="token punctuation">-</span> percent_of_time_waiting_on_ts_io
              <span class="token punctuation">-</span> percent_of_time_waiting_on_mq
              <span class="token punctuation">-</span> percent_of_time_waiting_on_interval_control
              <span class="token punctuation">-</span> cicsplex_name
              <span class="token punctuation">-</span> percent_of_time_waiting_on_enq_delay
              <span class="token punctuation">-</span> average_time_using_cpu
              <span class="token punctuation">-</span> percent_of_time_waiting_for_1st_dispatch
              <span class="token punctuation">-</span> average_dsa_storage_occupied
              <span class="token punctuation">-</span> average_edsa_storage_occupied
              <span class="token punctuation">-</span> number_of_abended_transactions
          <span class="token key atrule">cicscos</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> system_id
              <span class="token punctuation">-</span> cics_region_name
              <span class="token punctuation">-</span> connection_type
              <span class="token punctuation">-</span> allocation_rate
              <span class="token punctuation">-</span> allocate_percentage
          <span class="token key atrule">con</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> system_id
              <span class="token punctuation">-</span> cics_region_name
              <span class="token punctuation">-</span> connected_system_name
              <span class="token punctuation">-</span> connection_type
              <span class="token punctuation">-</span> number_of_links_defined
              <span class="token punctuation">-</span> number_of_links_in_use
              <span class="token punctuation">-</span> percent_of_links_in_use
              <span class="token punctuation">-</span> connection_name
              <span class="token punctuation">-</span> connection_status
              <span class="token punctuation">-</span> link_allocation_rate
          <span class="token key atrule">vsam</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> system_id
              <span class="token punctuation">-</span> cics_region_name
              <span class="token punctuation">-</span> dataset_name
              <span class="token punctuation">-</span> vsam_enable_status
              <span class="token punctuation">-</span> data_ca_split_total
              <span class="token punctuation">-</span> data_ci_split_total
              <span class="token punctuation">-</span> total_string_waits
              <span class="token punctuation">-</span> number_of_data_records
              <span class="token punctuation">-</span> number_of_data_inserts
              <span class="token punctuation">-</span> number_of_data_retrieves
              <span class="token punctuation">-</span> number_of_data_updates
              <span class="token punctuation">-</span> number_of_data_deletes
          <span class="token key atrule">cicsrat</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> system_id
              <span class="token punctuation">-</span> cics_region_name
              <span class="token punctuation">-</span> transaction_id
              <span class="token punctuation">-</span> rate_per_minute
          <span class="token key atrule">cicsrts</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> system_id
              <span class="token punctuation">-</span> cics_region_name
              <span class="token punctuation">-</span> response_time
              <span class="token punctuation">-</span> group_name
              <span class="token punctuation">-</span> group_type
              <span class="token punctuation">-</span> exceeds_rta_threshold
          <span class="token key atrule">kcpplx</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> cicsplex_name
              <span class="token punctuation">-</span> number_of_regions
              <span class="token punctuation">-</span> transaction_rate
              <span class="token punctuation">-</span> io_rate
              <span class="token punctuation">-</span> page_rate
              <span class="token punctuation">-</span> storage_violations
              <span class="token punctuation">-</span> ices
              <span class="token punctuation">-</span> current_string_waits
              <span class="token punctuation">-</span> current_buffer_waits
              <span class="token punctuation">-</span> cpu_utilization
              <span class="token punctuation">-</span> higest_maxt_percent
              <span class="token punctuation">-</span> any_sos_regions
              <span class="token punctuation">-</span> all_vtam_acbs_open
              <span class="token punctuation">-</span> worst_performance_index
              <span class="token punctuation">-</span> sos_region
              <span class="token punctuation">-</span> cicsplex_version
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br><span class="line-number">253</span><br><span class="line-number">254</span><br><span class="line-number">255</span><br><span class="line-number">256</span><br><span class="line-number">257</span><br><span class="line-number">258</span><br><span class="line-number">259</span><br><span class="line-number">260</span><br><span class="line-number">261</span><br><span class="line-number">262</span><br><span class="line-number">263</span><br><span class="line-number">264</span><br><span class="line-number">265</span><br><span class="line-number">266</span><br><span class="line-number">267</span><br><span class="line-number">268</span><br><span class="line-number">269</span><br><span class="line-number">270</span><br><span class="line-number">271</span><br><span class="line-number">272</span><br><span class="line-number">273</span><br><span class="line-number">274</span><br><span class="line-number">275</span><br><span class="line-number">276</span><br></div></div><p>After editing the configuration file, restart OMEGAMON Data Connect.</p><p>For example, if you are running OMEGAMON Data Connect on z/OS, enter the following MVS <code>MODIFY</code> system command:</p><div class="language-plain ext-plain"><pre class="language-plain"><code>F OMEGCONN,APPL=RESTART
</code></pre></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Restarting OMEGAMON Data Connect flushes unsent records. Flushed records are lost, not sent to any destination.</p></div>`,12);function p(t,c){return e}var o=n(a,[["render",p]]);export{o as default};
