function Developer(name, email,socialSecurityNumber, id, birthDate){
   // this.name = name;
   // this.email = email;
   // this.socialSecurityNumber = socialSecurityNumber
   // this.id = id;
   // this.birthDate = birthDate
   // this.status = 'pause'
Developer.call(this, name, email, socialSecurityNumber, id, birthDate)
}

FullStackDeveloper.prototype.constructor = Developer
FullStackDeveloper.prototype = Object.create(Worker.prototype)

Developer.prototype.code= function(){
    this.status = 'coding full stack'
}
