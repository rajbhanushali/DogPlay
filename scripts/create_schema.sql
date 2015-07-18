create table dogs (dogId number(5) not null, name varchar2(50), breed varchar2(200), address varchar2(100),
city varchar2(100), state varchar2(2) default 'CA', imgURL varchar2(250), postDate date default sysdate);

alter table dogs add (latitude varchar2(25), longitude varchar2(25));

desc dogs;
select dogs_dogId_seq.nextval from dual;


create sequence dogs_dogId_seq;

create or replace trigger dogs_dogId_trigger
   before insert on dogs
   for each row
begin
   if :new.dogId is null
   then
      :new.dogId := dogs_dogId_seq.nextval;
   end if;
end dogs_dogId_trigger;