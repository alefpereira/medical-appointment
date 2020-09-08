doctorModule.
  component('doctorForm', {
    templateUrl: 'doctor/doctor-form/doctor-form.component.html',
    controller: function DoctorFormController(DoctorFactory) {
      var ctrl = this;
     
      ctrl.$onInit = function(){
      }

      ctrl.save = function(){
          console.log(ctrl.doctor)
          // return DoctorFactory.save(ctrl.doctor)
      }
    }
  });
  