import PackageBasic from "./ui/PackageBasic"
import PackageEngineer from "./ui/PackageEngineer"
import PackageRecruiter from "./ui/PackageRecruiter"

const Propositions = () => {
    return (
      <section className="mt-10 mb-70">
          <div className="container">
              <h1 className='uppercase font-black text-4xl text-bec mb-10 text-center'>Пропозиції</h1>
              <PackageBasic />
              <div className="flex justify-around">
                  <PackageRecruiter />
                  <PackageEngineer />
              </div>
          </div>
      </section>
    )
}
export default Propositions