import classNames from 'classnames';

export default function ClippedSection({
  className,
  children,
  reverse,
  dontClip,
  justifyCenter,
  clip10,
  innerClassName,
}) {
  return (
    <section className={classNames('container-fluid g-2 hero', {
      clip01: !dontClip && !clip10,
      clip10,
      'has-clipped-next': dontClip,
    }, className)}
    >
      <div className="row ">
        <div className="col-12">
          <div className="container position-relative">
            <div className={classNames('row gx-0', innerClassName, {
              'flex-lg-row-reverse': reverse,
              'justify-content-center': justifyCenter,
            })}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
