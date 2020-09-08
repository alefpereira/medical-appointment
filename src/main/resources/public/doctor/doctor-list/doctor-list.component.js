doctorModule.
  component('doctorList', {
    templateUrl: 'doctor/doctor-list/doctor-list.component.html',
    controller: function DoctorListController(DoctorFactory) {
      var ctrl = this;
  
      ctrl.$onInit = function(){
        ctrl.getAllDoctors()
      }

      ctrl.getAllDoctors = function() {
        return DoctorFactory.getAllDoctors().then(function(response) {
          ctrl.doctors = response.data
        })
      }

      ctrl.edit = function (doctor) {
        console.log('item:', doctor)
      }
    }
  });
  