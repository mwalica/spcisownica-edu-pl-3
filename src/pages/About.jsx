import PageTitle from "../components/PageTitle";

function AboutPage() {
  return (
    <section>
      <div className='relative isolate'>
        {/* svg graphic 2 */}
        <div
          className='absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48'
          aria-hidden='true'
        >
          <div
            className='aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30'
            style={{
              clipPath:
                "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
            }}
          />
        </div>

        {/* --------------------------------- */}
        <div className='overflow-hidden'>
          <div className='mx-auto max-w-5xl px-6 pb-32 pt-12 sm:pt-16 lg:px-8 lg:pt-16'>
            {/* title */}
            <PageTitle title='O szkole' subtitle='Informacje' />

            {/* content */}
            <div>
              {/* info container */}
              <div className='w-full  mx-auto max-w-5xl px-8'>
                <dl className='divide-y divide-gray-200'>
                  <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                    <dt className='info-item-dt'>Adres</dt>
                    <dd className='info-item-dd'>
                      <strong>Zespół Szkolno-Przedszkolny w Cisownicy</strong>
                      <br />
                      Cisownica, ul. Cisowa 79, 43-440 Goleszów
                    </dd>
                  </div>
                  <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                    <dt className='info-item-dt'>E-mail</dt>
                    <dd className='info-item-dd'>
                      zspcisownica@oswiata.goleszow.info.pl
                    </dd>
                  </div>
                  <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                    <dt className='info-item-dt'>
                      Elektroniczna skrzynka podawcza
                    </dt>
                    <dd className='info-item-dd'>
                      EPUAP: /ZSPCisownica/domyslna
                    </dd>
                  </div>
                  <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                    <dt className='info-item-dt'>Telefon</dt>
                    <dd className='info-item-dd'>33 8528233</dd>
                  </div>
                  <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                    <dt className='info-item-dt'>Organ prowadzący</dt>
                    <dd className='info-item-dd'>Gmina Goleszów</dd>
                  </div>
                  <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                    <dt className='info-item-dt'>Dyrektor</dt>
                    <dd className='info-item-dd'>mgr Przemysław Misiarz</dd>
                  </div>
                  <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                    <dt className='info-item-dt'>V-ce dyrektor:</dt>
                    <dd className='info-item-dd'>mgr Aleksandra Chmiel</dd>
                  </div>
                  <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                    <dt className='info-item-dt'>Liczba nauczycieli</dt>
                    <dd className='info-item-dd'>28</dd>
                  </div>
                  <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                    <dt className='info-item-dt'>Liczba oddziały</dt>
                    <dd className='info-item-dd'>12</dd>
                  </div>
                  <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                    <dt className='info-item-dt'>Liczba uczniów</dt>
                    <dd className='info-item-dd'>200</dd>
                  </div>
                  <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                    <dt className='info-item-dt'>Liczba sal</dt>
                    <dd className='info-item-dd'>
                      8 sal lekcyjnych, sala gimnastyczna, basen, boisko
                      wielofunkcyjne, biblioteka, pracownia komputerowa,
                      świetlica, stołówka
                    </dd>
                  </div>
                </dl>
              </div>

              <h4 className='text-purple-500 font-medium text-2xl py-4'>
                Na co kładziemy nacisk?
              </h4>
              <p className='par-1'>
                Staramy się wykształcić w naszych uczniach cechy niezbędne we
                współczesnym świecie, takie jak: samodzielność, komunikatywność,
                asertywność, indywidualizm, umiejętność dokonywania samooceny.
                Cechy te staramy się kształtować poprzez dobór aktywizujących
                metod nauczania na wszystkich zajęciach lekcyjnych i
                pozalekcyjnych. Kładziemy także nacisk na to, aby nasi uczniowie
                pamiętali o swoich korzeniach ucząc ich historii, tradycji i
                kultury naszego regionu. Staramy się, aby w naszej szkole na co
                dzień panowała serdeczna atmosfera i mocna więź pomiędzy
                uczniami i nauczycielami. Dzięki temu udaje się nam zorganizować
                wiele imprez szkolnych i środowiskowych. Do stałych imprez
                należą:{" "}
                <strong>
                  ślubowanie i pasowanie uczniów klasy I, Dzień Nauczyciela,
                  Spotkanie Świąteczne, dyskoteka andrzejkowa, mikołajki,
                  dyskoteka i bal karnawałowy, powitanie wiosny, Dzień Otwarty
                  Szkoły, Piknik Szkolny
                </strong>{" "}
                i wiele innych. Prócz tego organizujemy liczne imprezy
                wewnątrzklasowe, takie jak:{" "}
                <strong>
                  Dzień Babci i Dziadka, Dzień Matki i Ojca, zabawy i wycieczki
                  klasowe
                </strong>
                .
              </p>
              <h4 className='text-purple-500 font-medium text-2xl py-4'>
                Zajęcia pozalekcyjne
              </h4>
              <p className="par-1">
                Dla wszystkich chętnych uczniów organizowane są zajęcia
                pozalekcyjne. Odbywają się zajęcia: kółka matematycznego,
                przyrodniczego, kultury angielskiej, teatralnego, plastycznego,
                origami i turystycznego. Ponadto uczniowie mogą uczestniczyć w
                zajęciach logopedycznych. Ze względu na bardzo dobrą bazę
                sportową uczniowie licznie uczestniczą w zajęciach
                rekreacyjno-sportowych, w sekcjach piłki nożnej i pływackiej.
                Uczniowie zdolni mają możliwość uczestniczenia w wielu
                konkursach, zarówno międzyszkolnych jak i międzyklasowych.
                Należą do nich konkursy o zasięgu ogólnopolskim oraz konkursy
                organizowane przez instytucje i organizacje regionalne, czy
                wreszcie organizowane przez nauczycieli i uczniów naszej szkoły,
                często we współpracy z rodzicami.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
