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
                  '<a href="javascript:void(0);" class="btn btn-primary btn-sm btn-flat btn-block country_info" data-country_territory_place="'+data[i].country_territory_place+'" data-confirmed="'+data[i].confirmed+'" data-recovered="'+data[i].recovered+'" data-died="'+data[i].died+'">' +
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
    $('#body_covid_cases_outside').on('click', '.country_info', function() {
      var data_country    = $(this).data('country_territory_place');
      var data_confirmed  = $(this).data('confirmed');
      var data_recovered  = $(this).data('recovered');
      var data_died       = $(this).data('died');

      $('#modal_country_info').modal('show');

      $('#txt_case_outside_country').text(data_country);
      $('#txt_case_outside_confirmed').text(data_confirmed);
      $('#txt_case_outside_recovered').text(data_recovered);
      $('#txt_case_outside_died').text(data_died);
    });

    //
    show_total_confirmed();

    //
    function show_total_confirmed()
    {
      $.ajax({
        type      : "GET",
        url       : "https://coronavirus-ph-api.now.sh/cases-outside-ph",
        async     : false,
        dataType  : "JSON",
        data      : {get_param: 'total'},
        success   : function(data)
        {
          for (var i=0;i<data.length;++i)
          {
            $('#txt_total').text(data[i].confirmed);
            $('#txt_total_recovered').text(data[i].recovered);
            $('#txt_total_died').text(data[i].died);
          }
        }
      });
    }

});