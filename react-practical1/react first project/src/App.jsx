import Card from "./Components/Card";
import './style.css';

const App=()=>{
    return <div className="cards">
         <Card imageSrc="https://www.jedacademy.az/front/img/1..png" title="Kiçik Qruplar" description="Dərslər kiçik qruplarda keçirilir, qrupda 4-7 tələbə olur"/>
        <Card imageSrc="https://www.jedacademy.az/front/img/2..png" title="Təcrübəli təlimçilər" description="Çox peşəkar və təcrübəli təlimçilərdən dərin bilikləri və geniş təcrübəni əldə etmiş olacaqsınız"/>
        <Card imageSrc="https://www.jedacademy.az/front/img/3..png" title="Nəzəriyyə + Praktika" description="Hər gün tədris + hər gün praktiki məşğələ metodu ilə seçdiyiniz sahəsi sürətlə öynəcəksiniz"/>
        <Card imageSrc="https://www.jedacademy.az/front/img/4..png" title="Təcrübə proqramı və Karyera dəstəyi" description="Kursu bitirdikdən sonra tələbələrimizi təcrübə proqramı ilə təmin edirik və iş həyatına tez başlamaları üçün əməkdaşlıq etdiyimiz şirkətlərə yönəldirik"/>
        <Card imageSrc="https://www.jedacademy.az/front/img/card-6.png" title="Ödənişsiz Sınaq Dərsləri" description="Sınaq dərslərimizdə heç bir ödəniş etmədən iştirak edib, tədrisimizin keyfiyyətini dəyərləndirə bilərsiniz"/>
        <Card imageSrc="https://www.jedacademy.az/front/img/7..png" title="Əyani və Online dərslər" description="Dərimizdə istər əyani, həm online formatda iştirak edə bilərsiniz"/>
        <Card imageSrc="https://www.jedacademy.az/front/img/8..png" title="Dərslərin Video Yazıları" description="Hər dərsdən sonra həmin dərsin video yazılarını əldə edəcəksiniz və istədiyiniz zaman həmin yazılara təkrar baxaraq, unutduğunuz mövzuları təkrarlaya biləcəksiniz"/>
        <Card imageSrc="https://www.jedacademy.az/front/img/8..png" title="Zəmanət Veririk" description="Tədrisimizə tam zəmanət veririk: əgər hər hansı mövzu və ya mövzular sizə tam aydın olmasa, həmin dərsləri sizə təkrar keçəcəyik"/>
        
    </div>
}
export default App;