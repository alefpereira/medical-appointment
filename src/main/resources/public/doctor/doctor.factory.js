class Doctor {
  constructor(data) {
    this.id=data.id || null;
    this.name=data.name || '';
    this.specialties=data.specialties || '';
  }
}

doctorModule.factory('DoctorFactory', function ($http) {
  return {
    new: function (data) {
      return new Doctor(data)
    },
    getAllDoctors: function() {
      return $http.get("api/doctor")
    },
    save: function(doctor){
      return $http.post("api/doctor", doctor)
    }
  }
});