$(function () {
    //
    show_covid_ph();
    //
    $('#tbl_covid_cases').DataTable({
      order: [[ 0, 'desc' ]]
    });
    //
    function show_covid_ph()
    {
      $.ajax({
        type      : "GET",
        url       : "https://coronavirus-ph-api.herokuapp.com/cases",
        async     : false,
        dataType  : "JSON",
        success   : function(data)
        {
          var html = '';
          var i;
          for(i=0; i<data.length; i++)
          {
            html +=
              '<tr>' +
                '<td>' +
                  '<a href="javascript:void(0);" class="btn btn-primary btn-sm btn-flat btn-block patient_info" data-case_no="'+data[i].case_no+'" data-date="'+data[i].date+'" data-age="'+data[i].age+'" data-gender="'+data[i].gender+'" data-nationality="'+data[i].nationality+'" data-hospital_admitted_to="'+data[i].hospital_admitted_to+'" data-travel_history="'+data[i].travel_history+'" data-resident_of="'+data[i].resident_of+'" data-status="'+data[i].status+'" data-latitude="'+data[i].latitude+'" data-longitude="'+data[i].longitude+'">' +
                    data[i].case_no +
                  '</a>' +
                '</td>' +
                '<td>' + data[i].date + '</td>' +
                '<td>' + data[i].age + '</td>' +
                '<td>' + data[i].gender + '</td>' +
                '<td>' + data[i].nationality + '</td>' +
                '<td>' + data[i].hospital_admitted_to + '</td>' +
                '<td>' + data[i].status + '</td>' +
              '</tr>';
          }
          $('#body_covid_cases').html(html);

          if(data){
            var total = data.length;
            $('#txt_total_cases').text(total);
          }

        }
      });
    }

    //
    $('#body_covid_cases').on('click', '.patient_info', function() {
      var data_case         = $(this).data('case_no');
      var data_date         = $(this).data('date');
      var data_age          = $(this).data('age');
      var data_gender       = $(this).data('gender');
      var data_nationality  = $(this).data('nationality');
      var data_hospital     = $(this).data('hospital_admitted_to');
      var data_travel       = $(this).data('travel_history');
      var data_status       = $(this).data('status');
      var data_latitude     = $(this).data('latitude');
      var data_longitude    = $(this).data('longitude');

      $('#modal_case_info').modal('show');

      $('#txt_case_no').text(data_case);
      $('#txt_case_date').text(data_date);
      $('#txt_case_age').text(data_age);
      $('#txt_case_gender').text(data_gender);
      $('#txt_case_nationality').text(data_nationality);
      $('#txt_case_hospital').text(data_hospital);
      $('#txt_case_travel').text(data_travel);
      $('#txt_case_status').text(data_status);
      $('#txt_case_latitude').text(data_latitude);
      $('#txt_case_longtitude').text(data_longitude);
    });

    test_results();
    
    function test_results()
    {
      let test_json = "https://coronavirus-ph-api.herokuapp.com/test-results";
      let result = JSON.parse(test_json);
      console.log(result.confirmed_cases + ", " + result.cases_tested_negative + ", " + result.cases_pending_test_results);
    }

});
