# CSS Kararlari

## 1. Breakpoint Secimi
- **Neden 640px ve 1024px sectim?** 640px ile dikey tablet/büyük telefonları, 1024px ile yatay tabletleri/küçük laptop ekranlarını baz aldım. Bu kırılımlar günümüz modern web geliştirmesinde endüstri standartlarıdır.
- **Icerigim bu noktalarda nasil degisiyor?** Mobilde dikey formda alt alta binen kolon yapısı varken, 640px üzerinde `Hakkımda` ve `Navigasyon` kısmı yatay düzene geçiyor. 1024px'de ise proje kartları 3 sütun oluyor ve ana layout tam ortaya merkeze oturtuluyor.

## 2. Layout Tercihleri
- **Header icin neden Flexbox sectim?** Logo sol tarafta, menü linkleri sağ tarafta olmak koşulu ile tek boyutlu (yatay) bir dizilime ihtiyaç duydum. Öğelerin arasındaki boşlukları ve yaslamayı (`justify-content: space-between`) Flexbox en optimize şekilde sağlıyor.
- **Proje kartlari icin neden Grid sectim?** Satır ve sütun yapısını 2 boyutlu alanda esnek olarak doldurmam gerekiyordu.
- **auto-fit mi auto-fill mi kullandim, neden?** `auto-fit` kullandım. Boş kalan sütun olduğunda bunu doldurmak yerine mevcut kutuların boş alanı değerlendirerek orantılı büyümesini istedim, bu şekilde tasarım ekran eninde esnediğinde çirkin boşluklar yaratmadı.

## 3. Design Tokens
- **Hangi renk paletini sectim ve neden?** Temiz ve kurumsal olduğu için **Mavi Grubu (#1E3A8A - #2563EB)** ana ve vurgu (primary/secondary) rengi olarak tercih ettim. Yazılarda siyah yerine koyu gri (#1F2937), arkaplanda ise beyaz ve uçuk bir gri tonları (#F9FAFB) kullanarak göz yormayan yüksek renk kontrastı elde ettim.
- **Spacing skalasini nasil belirledim?** 4px `0.25rem` üzerinden katlanarak artan (4, 8, 16, 24, 32, 48, 64 vb.) standart bir modern birim skalası uyguladım.
- **Fluid typography icin clamp degerlerini nasil ayarladim?** Mobil tasarımlar için baz (minimum), bilgisayarlar için maksi tavan (maksimum) belirlerken, arada dinamik genişlemesini desteklemesi için vw (viewport width) oranlarını da ekledim. Örneğin: `clamp(0.8rem, 0.75rem + 0.25vw, 0.9rem)`

## 4. Responsive Stratejiler
- **Mobile-first yaklasimini nasil uyguladim?** CSS kurallarını `:root`'tan hemen sonra yazarak varsayılanı "Mobil (en küçük ekran > max 639px)" kabul ettim. Ekran büyüdükçe ek tanımlamalar getirmek için `min-width` (@media) query'leri koydum.
- **Hangi elemanlar breakpoint'lerde degisiyor?** Header, navigasyon bağlantıları (`ul`, `li`), Proje kutusu (`.project-grid` ve `.project-card`), buton boyutları (`submit width`) yatay hizalamalara geçer. Öğeler arası padding (`var--space`) oranları büyür.
- **Gorsel boyutlari nasil yonettim?** Bütün görsellere `max-width: 100%; object-fit: cover; aspect-ratio: 1 veya sabit height: 200px` atayarak kapsayıcı kutuları içinde responsive kalmalarını sağladım.
