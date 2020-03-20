$(function () {
    //
    show_covid_outside();
    //
    $('#tbl_covid_cases_outside').DataTable();
    //
    function show_covid_outside()
    {
      $.ajax({
        type      : "GET",
        url       : "https://coronavirus-ph-api.now.sh/cases-outside-ph",
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
                  '<a href="javascript:void(0);" class="btn btn-primary btn-sm btn-flat btn-block patient_info" data-country_territory_place="'+data[i].country_territory_place+'" data-confirmed="'+data[i].confirmed+'" data-recovered="'+data[i].recovered+'" data-died="'+data[i].died+'">' +
                    data[i].country_territory_place +
                  '</a>' +
                '</td>' +
                '<td>' + data[i].confirmed + '</td>' +
                '<td>' + data[i].recovered + '</td>' +
                '<td>' + data[i].died + '</td>' +
              '</tr>';
          }
          $('#body_covid_cases_outside').html(html);
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
      var data_travel       = $(this).data('had_recent_travel_history_abroad');
      var data_status       = $(this).data('status');
      var data_other        = $(this).data('other_information');

      $('#modal_case_info').modal('show');

      $('#txt_case_no').text(data_case);
      $('#txt_case_date').text(data_date);
      $('#txt_case_age').text(data_age);
      $('#txt_case_gender').text(data_gender);
      $('#txt_case_nationality').text(data_nationality);
      $('#txt_case_hospital').text(data_hospital);
      $('#txt_case_travel').text(data_travel);
      $('#txt_case_status').text(data_status);
      $('#txt_case_other').text(data_other);
    });

});