import Head from 'next/head'
import Image from 'next/image'

export default function index() {
  return (
    <div>
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/insta.png" />
        {/* <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500&display=swap" rel="stylesheet"></link> */}
      </Head>
      <main className='flex flex-col justify-center items-center mt-20'>
        <div className='border rounded-sm flex flex-col justify-center items-center w-[350px] h-[393px]'>
          <div className='w-[192px] m-8'>
            <img src="/instagram.png" alt="" />
          </div>

          <div className='flex flex-col gap-2'>
            <div className='w-[268px] h-[38px] border pl-2 rounded-sm'>
              <input type="text" className='placeholder:text-xs w-[258px] h-[36px] outline-none' placeholder='Phone number, username, or email' />
            </div>
            <div className='w-[268px] h-[38px] border pl-2 rounded-sm'>
              <input type="password" className='placeholder:text-xs w-[258px] h-[36px] outline-none' placeholder='Password' />
            </div>
          </div>

          <div className='m-4 w-[268px] h-[30px] flex items-center {bg-[#b2dffc]} rounded justify-center text-white font-medium bg-[#0095f6] cursor-pointer'>Log In
          </div>

          <div className='flex justify-between items-center w-[268px]'>
            <div className='border-t-[1.5px] border-[#dbdbdb] w-[100px]'></div>
            <div className='text-[#8e8e8e] text-sm font-medium'>OR</div>
            <div className='border-t-[1.5px] border-[#dbdbdb] w-[100px]'></div>
          </div>

          <div className='flex justify-center items-center gap-2 mt-6'>
            <div className='w-4'>
              <img src="fb.png" alt="fb" />
            </div>
            <a href='https://fb.com' className='text-[#385185] text-sm font-medium'>Login in with Facebook</a>
          </div>

          <a href='https://www.instagram.com/accounts/password/reset/' className='flex items-center  justify-center text-xs text-[#00376b] font-normal my-4'>Forgot Password?</a>
        </div>

        <div className='w-[350px] h-[63px] border rounded-sm flex items-center justify-center mt-2'>
          <div className='text-sm pr-1'>Don't have an account?</div>
          <a href='https://www.instagram.com/accounts/emailsignup/' className='text-sm font-medium text-[#129cf6]'>Sign up</a>
        </div>
        <div className='text-[#8e8e8e] text-xs flex gap-3 flex-wrap items-center justify-center px-8 py-6'>
          <div>Meta</div>
          <div>About</div>
          <div>Blog</div>
          <div>Jobs</div>
          <div>Help</div>
          <div>API</div>
          <div>Privacy</div>
          <div>Terms</div>
          <div>Top Accounts</div>
          <div>Hashtags</div>
          <div>Locations</div>
          <div>Instagram Lite</div>
          <div>Contact Uploading & Non-Users</div>
        </div>

        <div className='text-[#8e8e8e] text-xs flex gap-3 flex-wrap items-center justify-center px-6'>
          <div>Dance</div>
          <div>Food & Drink
          </div>
          <div>Home & Garden
          </div>
          <div>Music
          </div>
          <div>Visual Arts
          </div>
        </div>

        <div className='text-[#8e8e8e] text-xs flex gap-3 flex-wrap items-center justify-center px-8 py-4'>
          <div>
            <select className='outline-none'><option value="en">English</option><option value="en-gb">English (UK)</option><option value="af">Afrikaans</option><option value="cs">Čeština</option><option value="da">Dansk</option><option value="de">Deutsch</option><option value="el">Ελληνικά</option><option value="es">Español (España)</option><option value="es-la">Español</option><option value="fi">Suomi</option><option value="fr">Français</option><option value="id">Bahasa Indonesia</option><option value="it">Italiano</option><option value="ja">日本語</option><option value="ko">한국어</option><option value="ms">Bahasa Melayu</option><option value="nb">Norsk</option><option value="nl">Nederlands</option><option value="pl">Polski</option><option value="pt-br">Português (Brasil)</option><option value="pt">Português (Portugal)</option><option value="ru">Русский</option><option value="sv">Svenska</option><option value="th">ภาษาไทย</option><option value="tl">Filipino</option><option value="tr">Türkçe</option><option value="zh-cn">中文(简体)</option><option value="zh-tw">中文(台灣)</option><option value="bn">বাংলা</option><option value="gu">ગુજરાતી</option><option value="hi">हिन्दी</option><option value="hr">Hrvatski</option><option value="hu">Magyar</option><option value="kn">ಕನ್ನಡ</option><option value="ml">മലയാളം</option><option value="mr">मराठी</option><option value="ne">नेपाली</option><option value="pa">ਪੰਜਾਬੀ</option><option value="si">සිංහල</option><option value="sk">Slovenčina</option><option value="ta">தமிழ்</option><option value="te">తెలుగు</option><option value="vi">Tiếng Việt</option><option value="zh-hk">中文(香港)</option><option value="bg">Български</option><option value="fr-ca">Français (Canada)</option><option value="ro">Română</option><option value="sr">Српски</option><option value="uk">Українська</option></select>

          </div>
          <div>© 2022 Instagram from Meta</div>
        </div>
      </main>

    </div>
  )
}


